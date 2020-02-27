import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideoItem } from 'src/app/feature/video-viewer/templates/viewer/viewer.component';
import { FeaturePageService } from '../../service/feature-page.service';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss']
})
export class FeaturePageComponent {
  public data$: Observable<FeaturePageData> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      const media = params.get('media');

      return this.featureService.pageData(media as 'tv' | 'movie', id);
    })
  );

  constructor(
    private route: ActivatedRoute,
    private featureService: FeaturePageService
  ) {}
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
