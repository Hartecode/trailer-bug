import { TestBed } from '@angular/core/testing';

import { MovieDBConfigService } from './movie-dbconfig.service';

describe('MovieDBConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: MovieDBConfigService = TestBed.get(MovieDBConfigService);
    expect(service).toBeTruthy();
  });
});
