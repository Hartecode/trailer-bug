import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent {
  @Input() data: PageNav;
  @Output() previous: EventEmitter<void> = new EventEmitter();
  @Output() next: EventEmitter<void> = new EventEmitter();

  public backPage() {
    this.previous.emit();
  }

  public nextPage() {
    this.next.emit();
  }
}

export interface PageNav {
  name: string;
  currentPage: number;
  totalPages: number;
}
