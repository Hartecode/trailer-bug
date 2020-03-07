import { CommonModule } from '@angular/common';
import { Input, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NoResultsModelComponent } from './no-results-model.component';

@NgModule({
  declarations: [NoResultsModelComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NoResultsModelComponent]
})
export class NoResultsModelModule {
  @Input() name: 'tv' | 'movie';
}
