import {Component, OnInit, Input} from '@angular/core';
import {Card} from '../../../../shared/layout/card/card.component';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {

  @Input() popularMovies: Card[];

  constructor() { }

  ngOnInit() {
  }

}
