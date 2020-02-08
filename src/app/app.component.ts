import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  public title = 'Trailer Bug';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      // tslint:disable-next-line: no-string-literal
      outlet.activatedRouteData['animation']
    );
  }
}
