import {Component, OnInit, Input} from '@angular/core';
import {Card} from '../../../../shared/layout/card/card.component';
import {Image} from '../../../../global/model/gobal-model';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {

  @Input() featuredPosters: Image[];
  @Input() popularMovies: Card[];
  @Input() popularTV: Card[];

  constructor() { }

  ngOnInit() {
  }

}
