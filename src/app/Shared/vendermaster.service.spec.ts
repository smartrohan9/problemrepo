import { TestBed } from '@angular/core/testing';

import { VendermasterService } from './vendermaster.service';

describe('VendermasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendermasterService = TestBed.get(VendermasterService);
    expect(service).toBeTruthy();
  });
});
