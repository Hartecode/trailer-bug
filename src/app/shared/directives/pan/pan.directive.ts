import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { fromEvent, merge, of, ReplaySubject } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[agPan]'
})
export class PanDirective implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private delta: GraphPoint = { x: 0, y: 0 };
  private currentPosition: GraphPoint = { x: 0, y: 0 };

  @Output() agPanLeft: EventEmitter<GraphPoint> = new EventEmitter();
  @Output() agPanRight: EventEmitter<GraphPoint> = new EventEmitter();
  @Output() agPanUp: EventEmitter<GraphPoint> = new EventEmitter();
  @Output() agPanDown: EventEmitter<GraphPoint> = new EventEmitter();
  @Output() agPan: EventEmitter<GraphPoint> = new EventEmitter();
  @Output() agPanStart: EventEmitter<void> = new EventEmitter();
  @Output() agPanEnd: EventEmitter<void> = new EventEmitter();

  constructor(
    private _el: ElementRef,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  private moveOnXaxis(x: number, currentPosition: GraphPoint) {
    this.moveOnAxis(x, 'x', currentPosition);
  }

  private moveOnYaxis(y: number, currentPosition: GraphPoint) {
    this.moveOnAxis(y, 'y', currentPosition);
  }

  /**
   * Checks if there is a change on the selected axis.
   * The direction of the change indicates what event gets emitted
   */
  private moveOnAxis(
    num: number,
    axis: 'x' | 'y',
    currentPosition: GraphPoint
  ) {
    const leftUp = {
      x: this.agPanLeft,
      y: this.agPanUp
    };

    const rightDown = {
      x: this.agPanRight,
      y: this.agPanDown
    };

    if (num !== this.delta[axis]) {
      num < this.delta[axis]
        ? leftUp[axis].emit(currentPosition)
        : rightDown[axis].emit(currentPosition);
    }
  }

  private extractXaxis = (ev: MouseEvent | TouchEvent): number =>
    (ev as MouseEvent).clientX !== undefined
      ? (ev as MouseEvent).clientX
      : (ev as TouchEvent).touches[0].clientX;
  private extractYaxis = (ev: MouseEvent | TouchEvent): number =>
    (ev as MouseEvent).clientY !== undefined
      ? (ev as MouseEvent).clientY
      : (ev as TouchEvent).touches[0].clientY;

  public ngOnInit() {
    const mouseDown$ = fromEvent(this._el.nativeElement, 'mousedown');
    const mousemove$ = fromEvent(this._document, 'mousemove');
    const mouseup$ = fromEvent(this._document, 'mouseup');

    const touchStart$ = fromEvent(this._el.nativeElement, 'touchstart');
    const touchmove$ = fromEvent(this._document, 'touchmove');
    const touchEnd$ = fromEvent(this._document, 'touchend');

    const pressStart$ = merge(mouseDown$, touchStart$).pipe(
      tap(v => this.agPanStart.emit())
    );
    const pressMove$ = merge(mousemove$, touchmove$);
    const pressEnd$ = merge(mouseup$, touchEnd$).pipe(
      tap(v => this.agPanEnd.emit())
    );

    const point$ = pressStart$.pipe(
      switchMap((ev: MouseEvent | TouchEvent) => {
        const startX: number = this.extractXaxis(ev);
        const startY: number = this.extractYaxis(ev);

        return pressMove$.pipe(
          map((event: MouseEvent | TouchEvent) => {
            event.preventDefault();
            const xPoint: number = this.extractXaxis(event);
            const yPoint: number = this.extractYaxis(event);
            const deltaX: number = xPoint - startX;
            const deltaY: number = yPoint - startY;

            this.currentPosition = {
              x: xPoint,
              y: yPoint
            };

            this.moveOnXaxis(deltaX, this.currentPosition);
            this.moveOnYaxis(deltaY, this.currentPosition);
            this.agPan.emit(this.currentPosition);

            this.delta = {
              x: deltaX,
              y: deltaY
            };
          }),
          takeUntil(pressEnd$),
          catchError(err => {
            // tslint:disable-next-line:no-console
            console.log('Handling error locally and rethrowing it...', err);
            return of('');
          })
        );
      }),
      takeUntil(this.destroyed$)
    );

    point$.subscribe();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

export interface GraphPoint {
  x: number;
  y: number;
}
