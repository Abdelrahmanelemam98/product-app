import { TestBed } from '@angular/core/testing';

import { CheckserverService } from './checkserver.service';

describe('CheckserverService', () => {
  let service: CheckserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
