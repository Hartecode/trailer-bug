import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImageCarouselComponent } from './image-carousel.component';

export const imageCarouselSchema: NgModule = {
  declarations: [ImageCarouselComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ImageCarouselComponent]
};

@NgModule({
  declarations: [ImageCarouselComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ImageCarouselComponent]
})
export class ImageCarouselModule {}
