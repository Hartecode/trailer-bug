import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { GeneralSearchService } from 'src/app/feature/search/services/general-search/general-search.service';
// import { LazyLoaderService } from 'src/app/module-injecter/services/lazy-loader/lazy-loader.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit, OnDestroy {
  public searchValue: string = '';
  private searchSerVal$: Observable<string> = this.searchService.search$.pipe(
    filter(val => val !== this.searchValue),
    tap(val => {
      this.searchValue = val;
    })
  );
  private subscription: Subscription[] = [];

  constructor(
    private router: Router,
    // private loader: LazyLoaderService,
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
