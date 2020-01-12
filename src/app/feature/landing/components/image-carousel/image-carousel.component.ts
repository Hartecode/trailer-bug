import {Component, Input} from '@angular/core';
import {Image} from '../../../../global/model/gobal-model';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  animations: [
    trigger('enterInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
          opacity: 0
        }),
        animate('0.5s ease-out', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('0.25s ease-in-out', style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ImageCarouselComponent {

  @Input() images: Image[];
  @Input() selectedImage: number = 0;
  @Input() intervalTime: number = 5000;

  private timerId = this.startImageInterval();

  public onBack() {
    this.selectedImage = (this.selectedImage) ? this.selectedImage - 1 : this.images.length - 1;
    this.restartInterval();
  }

  public onForward() {
    this.moveForward();
    this.restartInterval();
  }

  private restartInterval() {
    clearInterval(this.timerId);
    this.timerId = this.startImageInterval();
  }

  private startImageInterval() {
    return setInterval(() => this.moveForward(), this.intervalTime);
  }

  private moveForward() {
    this.selectedImage = (this.selectedImage !== this.images.length - 1) ?
     this.selectedImage + 1 : this.selectedImage = 0;
  }

}
