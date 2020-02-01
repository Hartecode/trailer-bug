import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewerComponent } from './viewer.component';

export const viewerSchema = {
  declarations: [ViewerComponent],
  imports: [CommonModule],
  exports: [ViewerComponent]
};

@NgModule(viewerSchema)
export class ViewerModule {}
