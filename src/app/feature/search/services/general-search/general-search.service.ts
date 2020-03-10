import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
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
  private pageBS: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private page$: Observable<number> = this.pageBS
    .asObservable()
    .pipe(distinctUntilChanged());
  private searchBS: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public search$: Observable<string> = this.searchBS.asObservable().pipe(
    filter(val => val.length > 1),
    debounceTime(500),
    distinctUntilChanged(),
    tap(val => this.pageBS.next(1)),
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

  public updatePage(num: number) {
    this.pageBS.next(num);
  }

  public updateSearch(val: string): void {
    const userInput: string = val.trim();
    if (userInput) {
      this.searchBS.next(userInput);
    }
  }

  private runSearch(): Observable<SearchResults> {
    return combineLatest([this.search$, this.page$]).pipe(
      switchMap(([search, page]) => {
        return this.http.get<GeneralSearchResponse>(
          this.movieApiConfig.search(search, page),
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
        const errResp: SearchResults = {
          currentPage: 0,
          totalPages: 0,
          results: []
        };
        return of(errResp);
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
