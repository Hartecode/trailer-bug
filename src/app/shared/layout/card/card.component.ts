import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() data: Card;

  @Output() showVideo: EventEmitter<{id: string}> = new EventEmitter();
  @Output() showPage: EventEmitter<{id: string}> = new EventEmitter();

  public onTriggerVideo() {
    this.showVideo.emit({id: this.data.id});
  }

  public onTriggerPage() {
    this.showPage.emit({id: this.data.id});
  }

  public trimText(text: string) {
    return (text.length > 150) ? `${text.substring(0, 150)}...` : text;
  }
}

export interface Card {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  releaseDate: string;
}
