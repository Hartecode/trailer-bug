import { Component } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  public showFiller = false;
  public toggleVideoList() {
    // tslint:disable-next-line: no-console
    console.log('trigger');
    this.showFiller = !this.showFiller;
  }
}
