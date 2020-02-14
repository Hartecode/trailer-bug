import { TestBed } from '@angular/core/testing';

import { GeneralSearchService } from './general-search.service';

describe('GeneralSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralSearchService = TestBed.get(GeneralSearchService);
    expect(service).toBeTruthy();
  });
});
