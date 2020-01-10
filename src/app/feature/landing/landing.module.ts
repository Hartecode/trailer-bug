import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './container/landing-container/landing-container.component';
import { RouterModule, Routes } from '@angular/router';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: LandingContainerComponent
  }
];

@NgModule({
  declarations: [LandingContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingModule { }
