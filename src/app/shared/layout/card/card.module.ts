import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './card.component';

export const cardSchema: NgModule = {
  declarations: [CardComponent],
  imports: [CommonModule, MatIconModule, SharedModule],
  exports: [CardComponent]
};

@NgModule(cardSchema)
export class CardModule {}
