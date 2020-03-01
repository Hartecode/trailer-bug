import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LandingService } from './landing.service';

describe('LandingService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: LandingService = TestBed.get(LandingService);
    expect(service).toBeTruthy();
  });
});
