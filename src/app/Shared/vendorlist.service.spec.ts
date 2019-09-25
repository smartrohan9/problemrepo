import { TestBed } from '@angular/core/testing';

import { VendorlistService } from './vendorlist.service';

describe('VendorlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorlistService = TestBed.get(VendorlistService);
    expect(service).toBeTruthy();
  });
});
