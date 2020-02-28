import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';

export const sharedSchema: NgModule = {
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: []
};

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: []
})
export class SharedModule {}
