import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card.component';

export const cardSchema = {
  declarations: [CardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CardComponent]
};

@NgModule(cardSchema)
export class CardModule {}
