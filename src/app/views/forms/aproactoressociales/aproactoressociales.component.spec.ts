import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproactoressocialesComponent } from './aproactoressociales.component';

describe('AproactoressocialesComponent', () => {
  let component: AproactoressocialesComponent;
  let fixture: ComponentFixture<AproactoressocialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AproactoressocialesComponent]
    });
    fixture = TestBed.createComponent(AproactoressocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
