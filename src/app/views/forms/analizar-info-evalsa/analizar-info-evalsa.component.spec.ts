import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizarInfoEvalsaComponent } from './analizar-info-evalsa.component';

describe('AnalizarInfoEvalsaComponent', () => {
  let component: AnalizarInfoEvalsaComponent;
  let fixture: ComponentFixture<AnalizarInfoEvalsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalizarInfoEvalsaComponent]
    });
    fixture = TestBed.createComponent(AnalizarInfoEvalsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
