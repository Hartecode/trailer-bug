import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import {
  GeneralSearchService,
  SearchState
} from 'src/app/feature/search/services/general-search/general-search.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit, OnDestroy {
  public searchValue: string = '';
  private searchSerVal$: Observable<
    SearchState
  > = this.searchService.searchState$.pipe(
    filter(val => {
      const { query } = val;
      return query !== this.searchValue;
    }),
    tap(val => {
      const { query } = val;
      this.searchValue = query;
    })
  );
  private subscription: Subscription[] = [];

  constructor(
    private router: Router,
    private searchService: GeneralSearchService
  ) {}

  ngOnInit() {
    this.subscription.push(this.searchSerVal$.subscribe());
  }

  ngOnDestroy() {
    this.subscription.forEach(v => v.unsubscribe());
  }

  public goToSearch(val: string): void {
    if (val) {
      this.router.navigate(['/', 'search'], { queryParams: { query: val } });
    }
  }

  public updateSearch(val: string): void {
    this.searchService.updateSearch(val);
  }
}
