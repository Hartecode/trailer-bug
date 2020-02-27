import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]'
})
export class LazyLoadDirective {
  constructor(private el: ElementRef) {}
}
