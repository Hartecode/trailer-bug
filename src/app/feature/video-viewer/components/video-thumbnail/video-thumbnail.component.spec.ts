import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThumbnailComponent } from './video-thumbnail.component';
import { videoThumbnailSchema } from './video-thumbnail.module';

describe('VideoThumbnailComponent', () => {
  let component: VideoThumbnailComponent;
  let fixture: ComponentFixture<VideoThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(videoThumbnailSchema).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
