import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LazyLoaderService } from './module-injecter/services/lazy-loader/lazy-loader.service';
import { fader } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  public title = 'Trailer Bug';

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private loader: LazyLoaderService) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      // tslint:disable-next-line: no-string-literal
      outlet.activatedRouteData['animation']
    );
  }

  load() {
    this.container.clear();
    this.loader.load('video-viewer', this.container, [
      {
        input: 'data',
        data: { id: '495764', type: 'movie' }
      }
    ]);
  }
}
