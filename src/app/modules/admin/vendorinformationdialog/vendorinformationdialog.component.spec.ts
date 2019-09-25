import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorinformationdialogComponent } from './vendorinformationdialog.component';

describe('VendorinformationdialogComponent', () => {
  let component: VendorinformationdialogComponent;
  let fixture: ComponentFixture<VendorinformationdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorinformationdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorinformationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
