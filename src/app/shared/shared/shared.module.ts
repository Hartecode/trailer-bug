import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

export const sharedSchema = {
  declarations: [ButtonComponent],
  imports: [
    CommonModule
  ]
};

@NgModule(sharedSchema)
export class SharedModule { }
