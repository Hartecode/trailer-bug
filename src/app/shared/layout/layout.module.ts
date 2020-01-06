import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {MatIconModule} from '@angular/material/icon';


export const layoutSchema = {
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
};

@NgModule(layoutSchema)
export class LayoutModule { }
