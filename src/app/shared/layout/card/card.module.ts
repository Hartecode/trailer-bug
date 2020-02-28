import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LazyLoadModule } from '../../directives/lazy-load/lazy-load.module';
import { CardComponent } from './card.component';

export const cardSchema: NgModule = {
  declarations: [CardComponent],
  imports: [CommonModule, MatIconModule, LazyLoadModule],
  exports: [CardComponent]
};

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatIconModule, LazyLoadModule],
  exports: [CardComponent]
})
export class CardModule {}
