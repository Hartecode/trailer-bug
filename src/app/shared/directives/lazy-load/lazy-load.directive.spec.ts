import { ElementRef } from '@angular/core';
import { LazyLoadDirective } from './lazy-load.directive';

describe('LazyLoadDirective', () => {
  it('should create an instance', () => {
    const directive = new LazyLoadDirective(
      new ElementRef(new HTMLImageElement())
    );
    expect(directive).toBeTruthy();
  });
});
