import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from '../../service/landing.service';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent {
  public landing$ = this.landingService.landing$;

  constructor(private landingService: LandingService, private router: Router) {}

  public openModel(id) {
    this.router.navigate([{ outlets: { viewer: [id] } }]);
  }
}
