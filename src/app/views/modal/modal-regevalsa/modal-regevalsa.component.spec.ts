import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegevalsaComponent } from './modal-regevalsa.component';

describe('ModalRegevalsaComponent', () => {
  let component: ModalRegevalsaComponent;
  let fixture: ComponentFixture<ModalRegevalsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRegevalsaComponent]
    });
    fixture = TestBed.createComponent(ModalRegevalsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
