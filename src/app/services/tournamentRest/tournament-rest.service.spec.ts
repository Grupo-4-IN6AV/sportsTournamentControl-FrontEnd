import { TestBed } from '@angular/core/testing';

import { TournamentRestService } from './tournament-rest.service';

describe('TournamentRestService', () => {
  let service: TournamentRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
