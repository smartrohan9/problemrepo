import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmdashboardComponent } from './bmdashboard.component';

describe('BmdashboardComponent', () => {
  let component: BmdashboardComponent;
  let fixture: ComponentFixture<BmdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
