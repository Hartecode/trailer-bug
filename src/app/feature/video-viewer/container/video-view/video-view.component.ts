import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MediaTrailersService } from '../../service/media-trailers.service';
import { VideoItem } from '../../templates/viewer/viewer.component';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class VideoViewComponent implements OnInit, OnDestroy {
  @Input() data: { id: string; type: 'movie' | 'tv' };
  @Input() selectedOption: number = 0;

  @Output() close = new EventEmitter<void>();

  public trailers?: VideoItem[];
  public hide: boolean = false;
  private subscriptions: Subscription[] = [];
  constructor(private trailerService: MediaTrailersService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.trailerService
        .getMediaVideos(this.data.id, this.data.type)
        .pipe(
          // tslint:disable-next-line: no-shadowed-variable
          tap(val => {
            this.trailers = val;
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(v => v.unsubscribe());
  }

  public onClose() {
    this.hide = true;
    setTimeout(() => {
      this.close.emit();
    }, 500);
  }
}
