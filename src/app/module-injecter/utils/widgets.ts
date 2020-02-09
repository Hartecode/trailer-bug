import { NgModuleFactory, Type } from '@angular/core';

export const lazyWidgets: {
  name: string;
  loadChildren: () => Promise<NgModuleFactory<unknown> | Type<unknown>>;
}[] = [
  {
    name: 'video-viewer',
    loadChildren: () =>
      import('../../feature/video-viewer/video-viewer.module').then(
        m => m.VideoViewerModule
      )
  }
];

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.name] = w.loadChildren;
  }
  return result;
}
