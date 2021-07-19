import { TestBed } from '@angular/core/testing';

import { NoperoomClientService } from './noperoom-client.service';

describe('NoperoomClientService', () => {
  let service: NoperoomClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoperoomClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
