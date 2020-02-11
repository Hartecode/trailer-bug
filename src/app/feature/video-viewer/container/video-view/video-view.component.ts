import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MediaTrailersService } from '../../service/media-trailers.service';
import { VideoItem } from '../../templates/viewer/viewer.component';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {
  @Input() data: { id: string; type: 'movie' | 'tv' };

  @Output() close = new EventEmitter<void>();

  public trailers: VideoItem[];

  constructor(private trailerService: MediaTrailersService) {}

  ngOnInit() {
    this.trailerService
      .getMediaVideos(this.data.id, this.data.type)
      .pipe(
        // tslint:disable-next-line: no-shadowed-variable
        tap(val => {
          this.trailers = val;
        })
      )
      .subscribe();
  }

  public onClose() {
    this.close.emit();
  }
}
