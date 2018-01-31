import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenReparacionComponent } from './orden-reparacion.component';

describe('OrdenReparacionComponent', () => {
  let component: OrdenReparacionComponent;
  let fixture: ComponentFixture<OrdenReparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenReparacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
