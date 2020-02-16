import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../../../../global/models/global-models';
import { Card, ShowVideo } from '../../../../shared/layout/card/card.component';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent {
  @Input() featuredPosters: Image[];
  @Input() popularMovies: Card[];
  @Input() popularTV: Card[];

  @Output() showTrailerInModel: EventEmitter<{
    id: number;
    media: 'tv' | 'movie';
  }> = new EventEmitter();

  public displayVideo(e: ShowVideo) {
    this.showTrailerInModel.emit({ id: e.id, media: e.type });
  }
}
