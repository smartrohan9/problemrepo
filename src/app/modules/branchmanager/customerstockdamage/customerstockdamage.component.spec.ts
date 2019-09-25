import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerstockdamageComponent } from './customerstockdamage.component';

describe('CustomerstockdamageComponent', () => {
  let component: CustomerstockdamageComponent;
  let fixture: ComponentFixture<CustomerstockdamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerstockdamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerstockdamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
