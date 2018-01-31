import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRepuestoComponent } from './admin-repuesto.component';

describe('AdminRepuestoComponent', () => {
  let component: AdminRepuestoComponent;
  let fixture: ComponentFixture<AdminRepuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRepuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
