import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../shared/layout/card/card.module';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { LandingContainerComponent } from './container/landing-container/landing-container.component';
import { OpeningComponent } from './templates/opening/opening.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: LandingContainerComponent
  }
];

export const landingSchema = {
  declarations: [
    LandingContainerComponent,
    OpeningComponent,
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes),
    CardModule,
    MatIconModule
  ],
  exports: [RouterModule]
};

@NgModule(landingSchema)
export class LandingModule {}
