import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageNavComponent } from './page-nav/page-nav.component';

export const pageNavSchema: NgModule = {
  declarations: [PageNavComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [PageNavComponent]
};

@NgModule({
  declarations: [PageNavComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [PageNavComponent]
})
export class PageNavModule {}
