import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import { MovieDBConfigService } from 'src/app/global/movieDBConfig/movie-dbconfig.service';
import { Card } from 'src/app/shared/layout/card/card.component';
import { MovieDB } from 'src/config/config';
import {
  GeneralSearchResponse,
  MovieSearchResponse,
  TVSearchResponse
} from '../../models/general-search.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralSearchService {
  private searchBS: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private search$: Observable<string> = this.searchBS.asObservable();
  public searchResults$ = this.runSearch();

  private movieApiConfig: MovieDB = this.movieDBService.apiConfig;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.movieApiConfig.accessToken}`
    })
  };

  constructor(
    private movieDBService: MovieDBConfigService,
    private http: HttpClient
  ) {}

  public updateSearch(val: string): void {
    this.searchBS.next(val);
  }

  private runSearch(): Observable<SearchResults> {
    return this.search$.pipe(
      filter(val => val.length > 1),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val => {
        return this.http.get<GeneralSearchResponse>(
          this.movieApiConfig.search(val),
          this.httpOptions
        );
      }),
      map(res => {
        return {
          currentPage: res.page,
          totalPages: res.total_pages,
          results: res.results
            .filter(
              val => val.media_type === 'tv' || val.media_type === 'movie'
            )
            .map((val: TVSearchResponse | MovieSearchResponse) => {
              return {
                id: val.id,
                image: {
                  src: val.poster_path
                    ? this.movieApiConfig.image(500, val.poster_path)
                    : '',
                  alt:
                    (val as MovieSearchResponse).original_title ||
                    (val as TVSearchResponse).original_name
                },
                title:
                  (val as MovieSearchResponse).title ||
                  (val as TVSearchResponse).name,
                description: val.overview,
                releaseDate:
                  (val as MovieSearchResponse).release_date ||
                  (val as TVSearchResponse).first_air_date
              };
            })
        };
      }),
      // tslint:disable-next-line: no-console
      tap(console.log),
      catchError(err => {
        // tslint:disable-next-line: no-console
        console.log(err);
        return of(err);
      })
    );
  }
}

export interface SearchResults {
  currentPage: number;
  totalPages: number;
  results: Card[];
}
