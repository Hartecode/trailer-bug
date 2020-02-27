import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturePageComponent } from './container/feature-page/feature-page.component';

const crisisCenterRoutes: Routes = [
  {
    path: '**',
    component: FeaturePageComponent
  },
  {
    path: '/:id',
    component: FeaturePageComponent
  }
];

export const featureSchema: NgModule = {
  declarations: [FeaturePageComponent],
  imports: [CommonModule],
  exports: [FeaturePageComponent]
};

@NgModule({
  declarations: [FeaturePageComponent],
  imports: [CommonModule, RouterModule.forChild(crisisCenterRoutes)],
  exports: [FeaturePageComponent]
})
export class FeaturePageModule {}
