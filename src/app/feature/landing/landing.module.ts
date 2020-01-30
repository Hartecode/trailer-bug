import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../shared/layout/card/card.module';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
// import { LandingContainerModule } from './container/landing-container/landing-container.module';
import { OpeningModule } from './templates/opening/opening.module';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./container/landing-container/landing-container.module').then(
        mod => mod.LandingContainerModule
      )
  }
];

export const landingSchema = {
  declarations: [ImageCarouselComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes),
    CardModule,
    MatIconModule,
    OpeningModule
  ],
  exports: [RouterModule]
};

@NgModule(landingSchema)
export class LandingModule {}
