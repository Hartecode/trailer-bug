import { Component, Input } from '@angular/core';
import { Image } from '../../../../global/models/global-models';
import { Card } from '../../../../shared/layout/card/card.component';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent {
  @Input() featuredPosters: Image[];
  @Input() popularMovies: Card[];
  @Input() popularTV: Card[];
}
