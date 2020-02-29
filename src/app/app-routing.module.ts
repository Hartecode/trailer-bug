import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./feature/search/search.module').then(mod => mod.SearchModule)
  },
  {
    path: 'tv',
    loadChildren: () =>
      import('./feature/feature-page/feature-page.module').then(
        mod => mod.FeaturePageModule
      ),
    data: { animation: 'MediaPage' }
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('./feature/feature-page/feature-page.module').then(
        mod => mod.FeaturePageModule
      ),
    data: { animation: 'MediaPage' }
  },
  {
    path: '',
    loadChildren: () =>
      import('./feature/landing/landing.module').then(mod => mod.LandingModule),
    data: { animation: 'Home' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
