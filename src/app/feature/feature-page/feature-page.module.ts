import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { VideoThumbnailModule } from 'src/app/shared/layout/video-thumbnail/video-thumbnail.module';
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
  imports: [CommonModule, MatIconModule],
  exports: [FeaturePageComponent]
};

@NgModule({
  declarations: [FeaturePageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    VideoThumbnailModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [FeaturePageComponent]
})
export class FeaturePageModule {}
