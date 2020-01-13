import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() data: Card;
  @Input() descCharLimit: number = 60;
  @Output() showVideo: EventEmitter<{id: number}> = new EventEmitter();
  @Output() showPage: EventEmitter<{id: number}> = new EventEmitter();

  public onTriggerVideo() {
    this.showVideo.emit({id: this.data.id});
  }

  public onTriggerPage() {
    this.showPage.emit({id: this.data.id});
  }

  public trimText(text: string) {
    return (text.length > this.descCharLimit) ? `${text.substring(0, this.descCharLimit)}...` : text;
  }
}

export interface Card {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  releaseDate: string;
}
