import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieDBConfigService } from 'src/app/global/movieDBConfig/movie-dbconfig.service';
import { GeneralSearchService } from './general-search.service';

const schema = {
  imports: [HttpClientTestingModule],
  providers: [MovieDBConfigService]
};

describe('GeneralSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule(schema));

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: GeneralSearchService = TestBed.get(GeneralSearchService);
    expect(service).toBeTruthy();
  });
});
