import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { GeneralSearchService } from './feature/search/services/general-search/general-search.service';
import { LazyLoaderService } from './module-injecter/services/lazy-loader/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Trailer Bug';
  public searchValue: string = '';

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private loader: LazyLoaderService,
    private searchService: GeneralSearchService
  ) {}

  ngOnInit() {
    // Need to register the dynamic region so it can be used throughout the app
    this.loader.registerRegion({
      ref: this.container,
      key: 'appContainer'
    });
  }

  public updateSearch(val: string) {
    this.searchService.updateSearch(val);
  }
}
