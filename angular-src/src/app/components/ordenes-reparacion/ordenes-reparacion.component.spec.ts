import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesReparacionComponent } from './ordenes-reparacion.component';

describe('OrdenesReparacionComponent', () => {
  let component: OrdenesReparacionComponent;
  let fixture: ComponentFixture<OrdenesReparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesReparacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
