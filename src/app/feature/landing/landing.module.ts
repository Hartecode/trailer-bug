import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingContainerComponent } from './container/landing-container/landing-container.component';
import { OpeningModule } from './templates/opening/opening.module';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: LandingContainerComponent
  },
  {
    path: '**',
    component: LandingContainerComponent
  }
];

export const landingSchema: NgModule = {
  declarations: [LandingContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes),
    OpeningModule
  ],
  exports: [RouterModule]
};

@NgModule({
  declarations: [LandingContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes),
    OpeningModule
  ],
  exports: [RouterModule]
})
export class LandingModule {}
