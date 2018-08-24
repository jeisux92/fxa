import { TestBed, inject } from '@angular/core/testing';

import { BidirectionalService } from './bidirectional.service';

describe('BidirectionalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidirectionalService]
    });
  });

  it('should be created', inject([BidirectionalService], (service: BidirectionalService) => {
    expect(service).toBeTruthy();
  }));
});
