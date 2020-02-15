import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './container/search/search.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

export const searchSchema = {
  declarations: [SearchComponent],
  imports: [CommonModule, RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
};

@NgModule(searchSchema)
export class SearchModule {}
