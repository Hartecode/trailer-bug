import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttribute: string | null = null;
  @Input() src: string = '';

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  public ngAfterViewInit() {
    if ('IntersectionObserver' in window) {
      // This is spinning up a new observer for every image
      // TODO: Share one observer for all images
      // TOOD: Configure options for best experience, https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
      this.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            this.triggerImageLoad();
          }
        });
      });
      this.observer.observe(this.el.nativeElement);
    }
  }

  private triggerImageLoad() {
    this.srcAttribute = this.src;
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
