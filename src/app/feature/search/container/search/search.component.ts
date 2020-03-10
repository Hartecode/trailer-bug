import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LazyLoaderService } from 'src/app/module-injecter/services/lazy-loader/lazy-loader.service';
import { ShowVideo } from 'src/app/shared/layout/card/card.component';
import {
  GeneralSearchService,
  SearchResults
} from '../../services/general-search/general-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchResults$: Observable<SearchResults> = this.searchService
    .searchResults$;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private loader: LazyLoaderService,
    private searchService: GeneralSearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const searchQuery: string = this.route.snapshot.queryParams.query || '';
    const pageQuery: number = Number(this.route.snapshot.queryParams.page) || 1;
    this.searchService.updateSearchState(searchQuery, pageQuery);

    this.subscriptions.push(
      this.searchService.searchState$
        .pipe(
          tap(searchState => {
            const { query, page } = searchState;
            const params = {
              queryParams: query && page ? { query, page } : { query }
            };
            this.router.navigate([], params);
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(v => v.unsubscribe());
  }

  public navigateToPage(e: ShowVideo) {
    this.router.navigate([`/${e.type}`, e.id]);
  }

  public backPage(currentPage: number): void {
    if (currentPage > 1) {
      this.searchService.updatePage(currentPage - 1);
    }
  }

  public nextPage(currentPage: number, totalPages: number): void {
    if (currentPage < totalPages) {
      this.searchService.updatePage(currentPage + 1);
    }
  }

  public openModel(e: ShowVideo) {
    this.loader.load(
      'video-viewer',
      'appContainer',
      [
        {
          input: 'data',
          data: { id: e.id, type: e.type }
        }
      ],
      [
        {
          output: 'close',
          method: () => this.loader.removeComponent('appContainer')
        }
      ]
    );
  }
}
