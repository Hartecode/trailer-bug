import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';

export const layoutSchema = {
  declarations: [],
  imports: [CardModule, CommonModule],
  exports: [CardModule]
};

@NgModule(layoutSchema)
export class LayoutModule {}
