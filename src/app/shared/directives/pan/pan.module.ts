import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanDirective } from './pan.directive';

@NgModule({
  declarations: [PanDirective],
  imports: [CommonModule],
  exports: [PanDirective]
})
export class PanModule {}
