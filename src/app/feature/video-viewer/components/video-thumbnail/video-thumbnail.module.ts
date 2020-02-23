import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VideoThumbnailComponent } from './video-thumbnail.component';

export const videoThumbnailSchema: NgModule = {
  declarations: [VideoThumbnailComponent],
  imports: [CommonModule, MatIconModule],
  exports: [VideoThumbnailComponent]
};

@NgModule({
  declarations: [VideoThumbnailComponent],
  imports: [CommonModule, MatIconModule],
  exports: [VideoThumbnailComponent]
})
export class VideoThumbnailModule {}
