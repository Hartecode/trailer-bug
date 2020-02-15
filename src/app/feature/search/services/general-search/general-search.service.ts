import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap
} from 'rxjs/operators';
import { MovieDBConfigService } from 'src/app/global/movieDBConfig/movie-dbconfig.service';
import { MovieDB } from 'src/config/config';

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

  private runSearch() {
    return this.search$.pipe(
      filter(val => val.length > 1),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val => {
        return this.http.get(this.movieApiConfig.search(val), this.httpOptions);
      })
    );
  }
}
