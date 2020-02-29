import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralSearchService } from 'src/app/feature/search/services/general-search/general-search.service';
import { LazyLoaderService } from 'src/app/module-injecter/services/lazy-loader/lazy-loader.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent {
  public searchValue: string = '';

  constructor(
    private router: Router,
    private loader: LazyLoaderService,
    private searchService: GeneralSearchService
  ) {}

  public goToSearch(val: string): void {
    if (val) {
      this.router.navigate(['/', 'search']);
    }
  }

  public updateSearch(val: string): void {
    this.searchService.updateSearch(val);
  }
}
