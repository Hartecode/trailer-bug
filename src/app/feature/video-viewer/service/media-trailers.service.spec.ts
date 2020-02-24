import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieDBConfigService } from 'src/app/global/movieDBConfig/movie-dbconfig.service';
import { MediaTrailersService } from './media-trailers.service';

const schema = {
  imports: [HttpClientTestingModule],
  providers: [MovieDBConfigService]
};

describe('MediaTrailersService', () => {
  beforeEach(() => TestBed.configureTestingModule(schema));

  it('should be created', () => {
    const service: MediaTrailersService = TestBed.get(MediaTrailersService);
    expect(service).toBeTruthy();
  });
});
