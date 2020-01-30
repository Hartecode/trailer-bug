import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

export function standardStorybookSchema(schema: NgModule) {
  return {
    ...schema,
    imports: [
      ...schema.imports,
      BrowserAnimationsModule,
      HttpClientTestingModule,
      RouterModule.forRoot([], { useHash: true })
    ]
  };
}
