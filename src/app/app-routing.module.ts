import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/landing/landing.module').then(mod => mod.LandingModule),
    pathMatch: 'prefix'
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./feature/video-viewer/video-viewer.module').then(
        mod => mod.VideoViewerModule
      ),
    data: { animation: 'isRight' },
    outlet: 'viewer'
  },
  {
    path: '**',
    loadChildren: () =>
      import('./feature/landing/landing.module').then(mod => mod.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
