import { TestBed, inject } from '@angular/core/testing';

import { BackgroundTrackerService } from './background-tracker.service';

describe('BackgroundTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackgroundTrackerService]
    });
  });

  it('should ...', inject([BackgroundTrackerService], (service: BackgroundTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
