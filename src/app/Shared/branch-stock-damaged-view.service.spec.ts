import { TestBed } from '@angular/core/testing';

import { BranchStockDamagedViewService } from './branch-stock-damaged-view.service';

describe('BranchStockDamagedViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchStockDamagedViewService = TestBed.get(BranchStockDamagedViewService);
    expect(service).toBeTruthy();
  });
});
