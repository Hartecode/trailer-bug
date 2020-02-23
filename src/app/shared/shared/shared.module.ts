import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';

export const sharedSchema: NgModule = {
  declarations: [ButtonComponent],
  imports: [CommonModule]
};

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule]
})
export class SharedModule {}
