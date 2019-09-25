import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchStockDamagedViewComponent } from './branch-stock-damaged-view.component';

describe('BranchStockDamagedViewComponent', () => {
  let component: BranchStockDamagedViewComponent;
  let fixture: ComponentFixture<BranchStockDamagedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchStockDamagedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchStockDamagedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
