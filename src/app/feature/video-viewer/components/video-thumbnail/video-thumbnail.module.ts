import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VideoThumbnailComponent } from './video-thumbnail.component';

export const videoThumbnailSchema = {
  declarations: [VideoThumbnailComponent],
  imports: [CommonModule, MatIconModule],
  exports: [VideoThumbnailComponent]
};

@NgModule(videoThumbnailSchema)
export class VideoThumbnailModule {}
