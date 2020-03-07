import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, ShowVideo } from '../../../../shared/layout/card/card.component';
import { CarouselImage } from '../../components/image-carousel/image-carousel.component';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent {
  @Input() featuredPosters: CarouselImage[];
  @Input() popularMovies: Card[];
  @Input() popularTV: Card[];

  @Output() showTrailerInModel: EventEmitter<{
    id: number;
    media: 'tv' | 'movie';
  }> = new EventEmitter();

  @Output() gotMediaPage: EventEmitter<{
    id: number;
    media: 'tv' | 'movie';
  }> = new EventEmitter();

  public displayVideo(e: ShowVideo) {
    this.showTrailerInModel.emit({ id: e.id, media: e.type });
  }

  public goToPage(e: ShowVideo) {
    this.gotMediaPage.emit({ id: e.id, media: e.type });
  }
}
