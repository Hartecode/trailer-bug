import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/landing/landing.module').then(mod => mod.LandingModule)
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./feature/video-viewer/video-viewer.module').then(
        mod => mod.VideoViewerModule
      ),
    outlet: 'viewer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
