import { TestBed } from '@angular/core/testing';

import { WeekCreatorService } from './week-creator.service';

describe('WeekCreatorService', () => {
  let service: WeekCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
