import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-load.directive';

@NgModule({
  declarations: [LazyLoadDirective],
  imports: [CommonModule],
  exports: [LazyLoadDirective]
})
export class LazyLoadModule {}
