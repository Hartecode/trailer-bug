import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDB } from '../../../../config/config';
import { Image } from '../../../global/models/global-models';
import { MovieDBConfigService } from '../../../global/movieDBConfig/movie-dbconfig.service';
import { Card } from '../../../shared/layout/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private currentDate = new Date();
  private currentYear = this.currentDate.getFullYear();
  private currentMonth = this.currentDate.getMonth();
  private currentDay = this.currentDate.getDay();
  private monthAgoDate = new Date(
    this.currentDate.setMonth(this.currentDate.getMonth() - 1)
  );
  private lastMonthYear = this.monthAgoDate.getFullYear();
  private lastMonth = this.monthAgoDate.getMonth();
  private lastMonthDay = this.monthAgoDate.getDay();
  private movieApiConfig: MovieDB = this.movieDBService.apiConfig;
  private discoverMovieApi: string = `${this.movieApiConfig.discover()}/movie?sort_by=popularity.desc`;

  private discoverTVApi: string = `${this.movieApiConfig.discover()}/tv?language=en-US&sort_by=popularity.desc`;
  private trendingOfDay: string = `${this.movieApiConfig.trending()}/all/day`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.movieApiConfig.accessToken}`
    })
  };
  public landing$: Observable<LandingData> = combineLatest([
    this.getRecentMovie(),
    this.getRecentTV(),
    this.getDailyFeatures()
  ]).pipe(
    map(([recentMovies, recentTV, featuredPosters]) => {
      return {
        featuredPosters,
        recentTV,
        recentMovies
      };
    })
  );

  public error$: Observable<PageError> = new Subject();

  constructor(
    private movieDBService: MovieDBConfigService,
    private http: HttpClient
  ) {}

  public getRecentMovie(): Observable<Card[]> {
    return this.http
      .get<DiscoveryMovieResponse>(this.discoverMovieApi, this.httpOptions)
      .pipe(
        map(res => {
          return res.results
            .filter(val => val.poster_path)
            .map((val, i) => {
              return {
                id: val.id,
                image: {
                  src: this.movieApiConfig.image(500, val.poster_path),
                  alt: val.original_name
                },
                title: val.title,
                description: val.overview,
                releaseDate: val.first_air_date,
                type: 'movie' as 'movie'
              };
            })
            .slice(0, 12);
        })
      );
  }

  public getRecentTV(): Observable<Array<Card>> {
    return this.http
      .get<DiscoveryTVResponse>(this.discoverTVApi, this.httpOptions)
      .pipe(
        map(res => {
          return res.results
            .filter(val => val.poster_path)
            .map(val => ({
              id: val.id,
              image: {
                src: `${this.movieApiConfig.image(200, val.poster_path)}`,
                alt: val.original_name
              },
              title: val.name,
              description: val.overview,
              releaseDate: val.first_air_date,
              type: 'tv' as 'tv'
            }))
            .slice(0, 12);
        })
      );
  }

  public getDailyFeatures(): Observable<Array<Image>> {
    return this.http
      .get<TrendingResponse>(this.trendingOfDay, this.httpOptions)
      .pipe(
        map(res => {
          return res.results
            .filter(val => val.backdrop_path)
            .map(val => {
              return {
                src: `${this.movieApiConfig.fullImage(val.backdrop_path)}`,
                alt: val.original_title,
                title: val.title
              };
            })
            .slice(0, 6);
        })
      );
  }
}

export interface PageError {
  pageError: boolean;
  error: HttpErrorResponse;
}

export interface LandingData {
  featuredPosters: Array<Image>;
  recentTV: Array<Card>;
  recentMovies: Array<Card>;
}

export interface DiscoveryTVResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<{
    original_name: string;
    id: number;
    name: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
    first_air_date: string;
    poster_path: string | null;
    genre_ids: number[];
    original_language: string;
    backdrop_path: string | null;
    overview: string;
    origin_country: string[];
  }>;
}

export interface DiscoveryMovieResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<{
    original_name: string;
    id: number;
    title: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
    first_air_date: string;
    poster_path: string | null;
    genre_ids: number[];
    original_language: string;
    backdrop_path: string | null;
    overview: string;
    origin_country: string[];
  }>;
}

export interface TrendingResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<{
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_data: string;
    genre_ids: string;
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }>;
}
