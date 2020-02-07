import { TestBed } from '@angular/core/testing';

import { MediaTrailersService } from './media-trailers.service';

describe('MediaTrailersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaTrailersService = TestBed.get(MediaTrailersService);
    expect(service).toBeTruthy();
  });
});
