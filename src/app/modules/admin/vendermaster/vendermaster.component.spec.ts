import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendermasterComponent } from './vendermaster.component';

describe('VendermasterComponent', () => {
  let component: VendermasterComponent;
  let fixture: ComponentFixture<VendermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
