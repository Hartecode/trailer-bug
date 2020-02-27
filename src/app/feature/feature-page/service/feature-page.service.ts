import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MovieDBConfigService } from 'src/app/global/movieDBConfig/movie-dbconfig.service';
import { MovieDB } from 'src/config/config';
import { MediaTrailersService } from '../../video-viewer/service/media-trailers.service';
import { FeaturePageData } from '../container/feature-page/feature-page.component';

@Injectable({
  providedIn: 'root'
})
export class FeaturePageService {
  private movieApiConfig: MovieDB = this.movieDBService.apiConfig;
  private mediaInfoURL = this.movieApiConfig.mediaFullInfo;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.movieApiConfig.accessToken}`
    })
  };

  constructor(
    private mediaTrailersService: MediaTrailersService,
    private movieDBService: MovieDBConfigService,
    private http: HttpClient
  ) {}

  private getMediaInfo(
    media: 'tv' | 'movie',
    id: string
  ): Observable<MediaInfo> {
    return this.http
      .get<ServiceTVDetails>(this.mediaInfoURL(media, id), this.httpOptions)
      .pipe(
        map(res => {
          // console.log(res);
          return {
            title: res.name,
            genres: res.genres.map(val => val.name),
            createdBy: res.created_by.map(val => val.name),
            desc: res.overview,
            poster: res.poster_path
              ? this.movieApiConfig.image(200, res.poster_path)
              : 'https://source.unsplash.com/evlkOfkQ5rE/170×256 ',
            backdrop: res.backdrop_path
              ? this.movieApiConfig.fullImage(res.backdrop_path)
              : 'https://source.unsplash.com/evlkOfkQ5rE/1600x900'
          };
        }),
        catchError(err => {
          // console.log(err);
          return of(err);
        })
      );
  }

  public pageData(
    media: 'tv' | 'movie',
    id: string
  ): Observable<FeaturePageData> {
    return combineLatest([
      this.getMediaInfo(media, id),
      this.mediaTrailersService.getMediaVideos(id, media)
    ]).pipe(
      map(([info, videos]) => {
        return {
          ...info,
          id,
          videos,
          type: media
        };
      })
    );
  }
}

interface MediaInfo {
  title: string;
  genres: string[];
  createdBy: string[];
  desc: string;
  poster: string;
  backdrop: string;
}

interface ServiceTVDetails {
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: string | null;
  networks: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  }[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
