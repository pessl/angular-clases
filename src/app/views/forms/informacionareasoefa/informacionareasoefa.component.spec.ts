import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionareasoefaComponent } from './informacionareasoefa.component';

describe('InformacionareasoefaComponent', () => {
  let component: InformacionareasoefaComponent;
  let fixture: ComponentFixture<InformacionareasoefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionareasoefaComponent]
    });
    fixture = TestBed.createComponent(InformacionareasoefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
