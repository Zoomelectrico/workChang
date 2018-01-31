import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarOrdenComponent } from './modificar-orden.component';

describe('ModificarOrdenComponent', () => {
  let component: ModificarOrdenComponent;
  let fixture: ComponentFixture<ModificarOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
