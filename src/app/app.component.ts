import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';
import { GeneralSearchService } from './feature/search/services/general-search/general-search.service';
import { LazyLoaderService } from './module-injecter/services/lazy-loader/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public title = 'Trailer Bug';
  public searchValue: string = '';

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private router: Router,
    private loader: LazyLoaderService,
    private searchService: GeneralSearchService
  ) {}

  ngAfterViewInit() {
    // Need to register the dynamic region so it can be used throughout the app
    this.loader.registerRegion({
      ref: this.container,
      key: 'appContainer'
    });
  }

  public goToSearch(val: string): void {
    if (val) {
      this.router.navigate(['/', 'search']);
    }
  }

  public updateSearch(val: string): void {
    this.searchService.updateSearch(val);
  }
}
