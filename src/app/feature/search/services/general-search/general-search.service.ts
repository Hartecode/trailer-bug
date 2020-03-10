import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  shareReplay,
  switchMap
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
  private defaultResponse: SearchResults = {
    currentPage: 0,
    totalPages: 0,
    results: []
  };
  private defaultState: SearchState = {
    query: '',
    page: 1
  };
  private searchStateBS: BehaviorSubject<SearchState> = new BehaviorSubject<
    SearchState
  >(this.defaultState);
  public searchState$: Observable<SearchState> = this.searchStateBS.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    shareReplay(1)
  );
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

  public updateSearchState(query: string, page: number) {
    this.searchStateBS.next({
      query,
      page
    });
  }

  public updatePage(page: number) {
    const { query } = this.searchStateBS.getValue();
    this.searchStateBS.next({
      query,
      page
    });
  }

  public updateSearch(val: string): void {
    const query: string = val.trim();
    const { page } = this.searchStateBS.getValue();
    this.searchStateBS.next({
      query,
      page
    });
  }

  private runSearch(): Observable<SearchResults> {
    return this.searchState$.pipe(
      switchMap(searchState => {
        const { query, page } = searchState;
        if (query) {
          return this.http.get<GeneralSearchResponse>(
            this.movieApiConfig.search(query, page),
            this.httpOptions
          );
        }
        return of(null);
      }),
      map((res: GeneralSearchResponse | null) => {
        if (!res) return this.defaultResponse;

        return {
          currentPage: res.page,
          totalPages: res.total_pages,
          results: res.results
            .filter(
              val => val.media_type === 'tv' || val.media_type === 'movie'
            )
            .map((val: TVSearchResponse | MovieSearchResponse) => {
              return {
                type: val.media_type,
                id: val.id,
                image: {
                  src: val.poster_path
                    ? this.movieApiConfig.image(500, val.poster_path)
                    : 'https://source.unsplash.com/evlkOfkQ5rE/400x225',
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
            }) as Card[]
        };
      }),
      catchError(err => {
        // tslint:disable-next-line: no-console
        console.log(err);
        return of(this.defaultResponse);
      }),
      shareReplay(1)
    );
  }
}

export interface SearchResults {
  currentPage: number;
  totalPages: number;
  results: Card[];
}

export interface SearchState {
  query: string;
  page: number;
}
