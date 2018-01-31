import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirCitaComponent } from './pedir-cita.component';

describe('PedirCitaComponent', () => {
  let component: PedirCitaComponent;
  let fixture: ComponentFixture<PedirCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
