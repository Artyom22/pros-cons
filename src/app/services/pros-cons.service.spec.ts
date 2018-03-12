import { TestBed, inject } from '@angular/core/testing';

import { ProsConsService } from './pros-cons.service';

describe('ProsConsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProsConsService]
    });
  });

  it('should be created', inject([ProsConsService], (service: ProsConsService) => {
    expect(service).toBeTruthy();
  }));
});
