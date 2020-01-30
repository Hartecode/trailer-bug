import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from '../../../../shared/layout/card/card.module';
import { ImageCarouselModule } from '../../components/image-carousel/image-carousel.module';
import { OpeningComponent } from './opening.component';

export const openingSchema = {
  declarations: [OpeningComponent],
  imports: [CommonModule, CardModule, MatIconModule, ImageCarouselModule],
  exports: [OpeningComponent]
};

@NgModule(openingSchema)
export class OpeningModule {}
