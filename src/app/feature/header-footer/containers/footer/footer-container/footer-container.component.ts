import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent {
  public updateCopyRightYear(): number {
    const date: Date = new Date();
    return date.getFullYear();
  }
}
