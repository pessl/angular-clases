import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproinformacionareaoefaComponent } from './aproinformacionareaoefa.component';

describe('AproinformacionareaoefaComponent', () => {
  let component: AproinformacionareaoefaComponent;
  let fixture: ComponentFixture<AproinformacionareaoefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AproinformacionareaoefaComponent]
    });
    fixture = TestBed.createComponent(AproinformacionareaoefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
