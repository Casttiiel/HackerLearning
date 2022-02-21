import { TestBed } from '@angular/core/testing';

import { LolAPIService } from './lolapi.service';

describe('LolapiService', () => {
  let service: LolAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
