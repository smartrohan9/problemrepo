import { TestBed } from '@angular/core/testing';

import { CustomerstockdamageService } from './customerstockdamage.service';

describe('CustomerstockdamageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerstockdamageService = TestBed.get(CustomerstockdamageService);
    expect(service).toBeTruthy();
  });
});
