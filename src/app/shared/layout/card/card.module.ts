import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card.component';

export const cardSchema: NgModule = {
  declarations: [CardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CardComponent]
};

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CardComponent]
})
export class CardModule {}
