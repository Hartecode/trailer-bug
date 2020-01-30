import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCarouselComponent } from './image-carousel.component';

export const imageCarouselSchema = {
  declarations: [ImageCarouselComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ImageCarouselComponent]
};

@NgModule(imageCarouselSchema)
export class ImageCarouselModule {}
