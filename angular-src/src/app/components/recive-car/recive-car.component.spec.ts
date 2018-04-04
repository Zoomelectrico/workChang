import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveCarComponent } from './recive-car.component';

describe('ReciveCarComponent', () => {
  let component: ReciveCarComponent;
  let fixture: ComponentFixture<ReciveCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciveCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciveCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
