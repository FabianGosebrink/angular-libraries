import { TestBed } from '@angular/core/testing';

import { AngularRatingService } from './angular-rating.service';

describe('AngularRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularRatingService = TestBed.get(AngularRatingService);
    expect(service).toBeTruthy();
  });
});
