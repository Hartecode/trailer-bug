import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent {
  @Input() thumbnail?: VideoThumbnail;

  @Output()
  selected: EventEmitter<number> = new EventEmitter<number>();

  public onClick() {
    if (this.thumbnail) {
      this.selected.emit(this.thumbnail.index);
    }
  }
}

export interface VideoThumbnail {
  index: number;
  title: string;
  images: {
    alt: string;
    smallSrc: string;
    largeSrc: string;
  };
}
