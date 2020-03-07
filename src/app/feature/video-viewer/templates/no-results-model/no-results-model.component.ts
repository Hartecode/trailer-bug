import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-results-model',
  templateUrl: './no-results-model.component.html',
  styleUrls: ['./no-results-model.component.scss']
})
export class NoResultsModelComponent {
  @Input() name: 'tv' | 'moive';
}
