import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ViewerComponent } from './viewer.component';

export const viewerSchema = {
  declarations: [ViewerComponent],
  imports: [CommonModule, MatIconModule, MatSidenavModule],
  exports: [ViewerComponent]
};

@NgModule(viewerSchema)
export class ViewerModule {}
