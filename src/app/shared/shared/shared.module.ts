import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyLoadDirective } from '../directives/lazy-load.directive';
import { ButtonComponent } from './button/button.component';

export const sharedSchema: NgModule = {
  declarations: [ButtonComponent, LazyLoadDirective],
  imports: [CommonModule],
  exports: [LazyLoadDirective]
};

@NgModule(sharedSchema)
export class SharedModule {}
