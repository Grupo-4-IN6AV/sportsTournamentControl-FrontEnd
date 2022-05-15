import { TestBed } from '@angular/core/testing';

import { JourneyRestService } from './journey-rest.service';

describe('JourneyRestService', () => {
  let service: JourneyRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
