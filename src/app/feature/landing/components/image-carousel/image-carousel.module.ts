import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PanModule } from 'src/app/shared/directives/pan/pan.module';
import { ImageCarouselComponent } from './image-carousel.component';

export const imageCarouselSchema: NgModule = {
  declarations: [ImageCarouselComponent],
  imports: [CommonModule, MatIconModule, PanModule],
  exports: [ImageCarouselComponent]
};

@NgModule({
  declarations: [ImageCarouselComponent],
  imports: [CommonModule, MatIconModule, PanModule],
  exports: [ImageCarouselComponent]
})
export class ImageCarouselModule {}
