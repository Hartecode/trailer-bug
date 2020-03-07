import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoViewComponent } from './container/video-view/video-view.component';
import { NoResultsModelModule } from './templates/no-results-model/no-results-model.module';
import { ViewerModule } from './templates/viewer/viewer.module';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: VideoViewComponent
  }
];

export const VideoViewerSchema: NgModule = {
  declarations: [VideoViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes),
    NoResultsModelModule,
    ViewerModule
  ],
  exports: [RouterModule],
  entryComponents: [VideoViewComponent]
};

@NgModule({
  declarations: [VideoViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes),
    NoResultsModelModule,
    ViewerModule
  ],
  exports: [RouterModule],
  entryComponents: [VideoViewComponent]
})
export class VideoViewerModule {
  static entry = VideoViewComponent;
}
