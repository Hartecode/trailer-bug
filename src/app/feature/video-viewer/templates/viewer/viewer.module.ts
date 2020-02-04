import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VideoThumbnailModule } from '../../components/video-thumbnail/video-thumbnail.module';
import { ViewerComponent } from './viewer.component';

export const viewerSchema = {
  declarations: [ViewerComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    VideoThumbnailModule
  ],
  exports: [ViewerComponent]
};

@NgModule(viewerSchema)
export class ViewerModule {}
