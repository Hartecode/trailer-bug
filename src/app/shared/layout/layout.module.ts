import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';


export const layoutSchema = {
  declarations: [CardComponent],
  imports: [
    CommonModule
  ]
};

@NgModule(layoutSchema)
export class LayoutModule { }
