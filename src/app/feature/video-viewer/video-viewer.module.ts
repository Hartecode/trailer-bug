import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoViewComponent } from './container/video-view/video-view.component';
import { ViewerModule } from './templates/viewer/viewer.module';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: VideoViewComponent
  }
];

export const VideoViewerSchema = {
  declarations: [VideoViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes),
    ViewerModule
  ],
  exports: [RouterModule],
  entryComponents: [VideoViewComponent]
};

@NgModule(VideoViewerSchema)
export class VideoViewerModule {
  static entry = VideoViewComponent;
}
