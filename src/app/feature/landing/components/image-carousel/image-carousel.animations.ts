import { trigger, transition, animate, style, group, query } from '@angular/animations';

export const slideAnimations = trigger('slideAnimation', [
    transition(':increment', group([
      query(':enter', [
        style({
          transform: 'translateX(100%)',
        }),
        animate('0.5s ease-out', style('*'))
      ]),
      query(':leave', [
        animate('0.5s ease-in', style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ])),
    transition(':decrement', group([
      query(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('0.5s ease-out', style('*'))
      ]),
      query(':leave', [
        animate('0.5s ease-in', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      ])
    ]))
  ])