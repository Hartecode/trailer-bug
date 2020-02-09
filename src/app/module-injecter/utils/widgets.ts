import { NgModuleFactory, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const lazyWidgets = [
  {
    path: 'video-viewer',
    loadChildren: () =>
      import('../../feature/video-viewer/video-viewer.module').then(
        m => m.VideoViewerModule
      )
  }
];

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.path] = w.loadChildren;
  }
  return result;
}
