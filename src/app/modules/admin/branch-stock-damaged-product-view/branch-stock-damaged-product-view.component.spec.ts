import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchStockDamagedProductViewComponent } from './branch-stock-damaged-product-view.component';

describe('BranchStockDamagedProductViewComponent', () => {
  let component: BranchStockDamagedProductViewComponent;
  let fixture: ComponentFixture<BranchStockDamagedProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchStockDamagedProductViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchStockDamagedProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
