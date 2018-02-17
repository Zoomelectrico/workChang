import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteDashboardComponent } from './gerente-dashboard.component';

describe('GerenteDashboardComponent', () => {
  let component: GerenteDashboardComponent;
  let fixture: ComponentFixture<GerenteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
