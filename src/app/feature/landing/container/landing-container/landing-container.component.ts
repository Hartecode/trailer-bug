import { Component } from '@angular/core';
import { LandingService } from '../../service/landing.service';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent {
  public landing$ = this.landingService.landing$;

  constructor(private landingService: LandingService) {}
}
