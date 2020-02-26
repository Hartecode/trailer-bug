import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { MovieDBConfigService } from 'src/app/global/movieDBConfig/movie-dbconfig.service';
import { KeyFunction, MovieDB } from 'src/config/config';
import { VideoItem } from '../templates/viewer/viewer.component';

@Injectable({
  providedIn: 'root'
})
export class MediaTrailersService {
  private movieApiConfig: MovieDB = this.movieDBService.apiConfig;
  private youTubeVideo: KeyFunction = this.movieApiConfig.youTube;
  private vimoeVideo: KeyFunction = this.movieApiConfig.vimeo;
  private smallYouTubeThumbnail: KeyFunction = this.movieApiConfig
    .youTubeThumbnail.default;
  private largeYouTubeThumbnail: KeyFunction = this.movieApiConfig
    .youTubeThumbnail.smallDefault;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.movieApiConfig.accessToken}`
    })
  };
  private videoType = {
    YouTube: 'youTube',
    Vimeo: 'vimoe'
  };
  constructor(
    private movieDBService: MovieDBConfigService,
    private http: HttpClient
  ) {}

  public getMediaVideos(id: string, media: string): Observable<VideoItem[]> {
    const mediaTvUrls = {
      tv: this.movieApiConfig.tvVideo(id),
      movie: this.movieApiConfig.movieVideo(id)
    };

    return this.http
      .get<ServiceVideo>(mediaTvUrls[media], this.httpOptions)
      .pipe(
        map(res => {
          return res.results.map(val => {
            return {
              title: val.name,
              type: val.site as 'youtube' | 'vimoe',
              url:
                val.site === 'YouTube'
                  ? this.youTubeVideo(val.key)
                  : this.vimoeVideo(val.key),
              images: {
                alt: val.name,
                smallSrc: this.smallYouTubeThumbnail(val.key),
                largeSrc: this.largeYouTubeThumbnail(val.key)
              }
            };
          });
        }),
        catchError(e => {
          // tslint:disable-next-line: no-console
          console.log(e);
          return [];
        })
      );
  }
}

interface ServiceVideo {
  id: number;
  results: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: 'YouTube' | 'Vimeo';
    size: number;
    type: string;
  }[];
}
