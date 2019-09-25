import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchStockDamagedComponent } from './branch-stock-damaged.component';

describe('BranchStockDamagedComponent', () => {
  let component: BranchStockDamagedComponent;
  let fixture: ComponentFixture<BranchStockDamagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchStockDamagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchStockDamagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
