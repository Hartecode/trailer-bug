import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { MediaTrailersService } from '../../service/media-trailers.service';
import { VideoItem } from '../../templates/viewer/viewer.component';
// import { MediaTrailersService } from '../../service/media-trailers.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {
  public trailers: VideoItem[];
  @Input() data: { id: string; type: 'movie' | 'tv' };

  constructor(
    private trailerService: MediaTrailersService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

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
    // this.activeRoute.paramMap
    //   .pipe(
    //     switchMap(val => {
    //       const media: string = val.get('media');
    //       const id = val.get('id');
    //       return this.trailerService.getMediaVideos('495764', 'movie').pipe(
    //         // tslint:disable-next-line: no-shadowed-variable
    //         tap(val => {
    //           this.trailers = val;
    //         })
    //       );
    //     })
    //   )
    //   .subscribe();
  }

  public close() {
    this.router.navigate(['/']);
  }
}
