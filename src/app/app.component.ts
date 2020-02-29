import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { LazyLoaderService } from './module-injecter/services/lazy-loader/lazy-loader.service';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements AfterViewInit {
  public title = 'Trailer Bug';
  public searchValue: string = '';

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private loader: LazyLoaderService) {}

  ngAfterViewInit() {
    // Need to register the dynamic region so it can be used throughout the app
    this.loader.registerRegion({
      ref: this.container,
      key: 'appContainer'
    });
  }

  public prepareRoute(outlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
