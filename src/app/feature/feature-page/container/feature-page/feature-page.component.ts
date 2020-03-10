import { DOCUMENT, Location } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { VideoItem } from 'src/app/feature/video-viewer/templates/viewer/viewer.component';
import { LazyLoaderService } from 'src/app/module-injecter/services/lazy-loader/lazy-loader.service';
import { FeaturePageService } from '../../service/feature-page.service';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss']
})
export class FeaturePageComponent implements OnInit {
  @ViewChild('videoList') videosRef: ElementRef;

  public previousPage: boolean = false;
  public data$: Observable<FeaturePageData> = combineLatest([
    this.route.parent.url,
    this.route.paramMap
  ]).pipe(
    map(([urlArray, params]) => {
      const path = urlArray[urlArray.length - 1].path;
      return {
        params,
        path
      };
    }),
    switchMap(({ params, path }) => {
      const id = params.get('id');
      return this.featureService.pageData(path as 'tv' | 'movie', id);
    })
  );

  ngOnInit() {
    const sitUrls = [
      'https://trailerbug.netlify.com',
      'http://localhost:4200',
      'http://localhost:8080'
    ];
    const previousPageUrl = this._document.referrer;

    this.previousPage = sitUrls
      .map(v => previousPageUrl.includes(v))
      .includes(true);
  }

  constructor(
    private route: ActivatedRoute,
    private loader: LazyLoaderService,
    private featureService: FeaturePageService,
    private _location: Location,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public goBack(): void {
    this._location.back();
  }

  public scrollToVideos(): void {
    this.videosRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  public openModel(
    e: { id: string; media: string },
    selected: number = 0
  ): void {
    this.loader.load(
      'video-viewer',
      'appContainer',
      [
        {
          input: 'data',
          data: { id: e.id, type: e.media }
        },
        {
          input: 'selectedOption',
          data: selected
        }
      ],
      [
        {
          output: 'close',
          method: () => this.loader.removeComponent('appContainer')
        }
      ]
    );
  }
}

export interface FeaturePageData {
  id: number | string;
  type: 'tv' | 'movie';
  poster: string;
  backdrop: string;
  title: string;
  genres: string[];
  createdBy?: string[];
  desc: string;
  videos: VideoItem[];
}
