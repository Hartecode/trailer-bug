import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShowVideo } from 'src/app/shared/layout/card/card.component';
import { Image } from '../../../../global/models/global-models';
import { slideAnimations } from './image-carousel.animations';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  animations: [slideAnimations]
})
export class ImageCarouselComponent implements OnInit {
  @Input() images: CarouselImage[];
  @Input() selectedImage: number = 0;
  @Input() intervalTime: number = 5000;

  @Output() showPage: EventEmitter<ShowVideo> = new EventEmitter();

  private timerId;

  ngOnInit() {
    if (this.images) {
      this.timerId = this.startImageInterval();
    }
  }

  public onTriggerPage(id: number, type: 'tv' | 'movie') {
    this.showPage.emit({ id, type });
  }

  public onBack(): void {
    this.selectedImage = this.selectedImage
      ? --this.selectedImage
      : this.images.length - 1;
    this.restartInterval();
  }

  public onForward(): void {
    this.moveForward();
    this.restartInterval();
  }

  private restartInterval(): void {
    clearInterval(this.timerId);
    this.timerId = this.startImageInterval();
  }

  private startImageInterval() {
    return setInterval(() => this.moveForward(), this.intervalTime);
  }

  private moveForward(): void {
    this.selectedImage =
      this.selectedImage !== this.images.length - 1 ? ++this.selectedImage : 0;
  }
}

export interface CarouselImage extends Image {
  id: number;
  type: 'tv' | 'movie';
}
