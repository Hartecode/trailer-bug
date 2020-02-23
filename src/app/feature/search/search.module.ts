import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../shared/layout/card/card.module';
import { SearchComponent } from './container/search/search.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

export const searchSchema: NgModule = {
  declarations: [SearchComponent],
  imports: [
    CardModule,
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [RouterModule]
};

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CardModule,
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [RouterModule]
})
export class SearchModule {}
