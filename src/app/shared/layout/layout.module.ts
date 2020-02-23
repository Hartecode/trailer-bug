import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';

export const layoutSchema: NgModule = {
  declarations: [],
  imports: [CardModule, CommonModule],
  exports: [CardModule]
};

@NgModule({
  declarations: [],
  imports: [CardModule, CommonModule],
  exports: [CardModule]
})
export class LayoutModule {}
