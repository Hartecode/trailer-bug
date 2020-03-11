import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../shared/layout/card/card.module';
import { PageNavModule } from './components/page-nav/page-nav.module';
import { SearchComponent } from './container/search/search.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      // {path: '', component: },
      // {path: 'result/:index', component: },
    ]
  },
  {
    path: '**',
    component: SearchComponent
  }
];

export const searchSchema: NgModule = {
  declarations: [SearchComponent],
  imports: [
    CardModule,
    CommonModule,
    MatButtonModule,
    PageNavModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [RouterModule]
};

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CardModule,
    CommonModule,
    MatButtonModule,
    PageNavModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [RouterModule]
})
export class SearchModule {}
