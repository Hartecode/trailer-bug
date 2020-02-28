import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
export class SearchComponent {
  public searchResults$: Observable<SearchResults> = this.searchService
    .searchResults$;

  constructor(
    private router: Router,
    private loader: LazyLoaderService,
    private searchService: GeneralSearchService
  ) {}

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
