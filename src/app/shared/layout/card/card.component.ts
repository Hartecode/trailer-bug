import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: Card;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
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
