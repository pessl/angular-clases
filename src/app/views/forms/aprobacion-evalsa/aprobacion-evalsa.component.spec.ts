import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionEvalsaComponent } from './aprobacion-evalsa.component';

describe('AprobacionEvalsaComponent', () => {
  let component: AprobacionEvalsaComponent;
  let fixture: ComponentFixture<AprobacionEvalsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprobacionEvalsaComponent]
    });
    fixture = TestBed.createComponent(AprobacionEvalsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
