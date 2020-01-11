import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {MatIconModule} from '@angular/material/icon';

export const cardSchema = {
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [CardComponent]
};

@NgModule(cardSchema)
export class CardModule { }
