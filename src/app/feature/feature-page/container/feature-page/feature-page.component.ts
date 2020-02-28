import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { VideoItem } from 'src/app/feature/video-viewer/templates/viewer/viewer.component';
import { FeaturePageService } from '../../service/feature-page.service';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss']
})
export class FeaturePageComponent {
  @ViewChild('videoList') videosRef: ElementRef;

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

  constructor(
    private route: ActivatedRoute,
    private featureService: FeaturePageService
  ) {}

  public scrollToVideos(): void {
    this.videosRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

export interface FeaturePageData {
  id: number | string;
  type: 'tv' | 'movie';
  poster: string;
  backdrop: string;
  title: string;
  genres: string[];
  createdBy: string[];
  desc: string;
  videos: VideoItem[];
}
