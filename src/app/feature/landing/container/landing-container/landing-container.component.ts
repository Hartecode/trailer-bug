import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoaderService } from 'src/app/module-injecter/services/lazy-loader/lazy-loader.service';
import { LandingService } from '../../service/landing.service';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent {
  public landing$ = this.landingService.landing$;

  constructor(
    private router: Router,
    private loader: LazyLoaderService,
    private landingService: LandingService
  ) {}

  public navigateToPage(e) {
    this.router.navigate([`/${e.media}`, e.id]);
  }

  public openModel(e: { id: string; media: string }) {
    this.loader.load(
      'video-viewer',
      'appContainer',
      [
        {
          input: 'data',
          data: { id: e.id, type: e.media }
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
