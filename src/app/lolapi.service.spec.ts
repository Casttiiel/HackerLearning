import { TestBed } from '@angular/core/testing';

import { LolapiService } from './lolapi.service';

describe('LolapiService', () => {
  let service: LolapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
