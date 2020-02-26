import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewerComponent implements OnInit {
  @Input() videoList: VideoItem[];
  @Input() selectOption: number = 0;

  @Output() close = new EventEmitter<void>();

  private mainContentDeliveryBS = new BehaviorSubject<Data | null>(null);
  // used observable to deliver information so it can run outside change detection and wont reload
  // iframe when ever the toggle button is clicked
  public mainContentDelivery$ = this.mainContentDeliveryBS.asObservable();

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.videoList) {
      this.selectedVideo(this.selectOption);
    }
  }

  public safeVideoURL(num: number): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoList[num].url
    );
  }

  public selectedVideo(val: number): void {
    this.mainContentDeliveryBS.next({
      title: this.videoList[val].title,
      url: this.safeVideoURL(val)
    });
  }

  public closeViewer() {
    this.close.emit();
  }
}

export interface VideoItem {
  title: string;
  type: 'youtube' | 'vimoe';
  url: string;
  images: {
    alt: string;
    smallSrc: string;
    largeSrc: string;
  };
}

interface Data {
  title: string;
  url: SafeResourceUrl;
}
