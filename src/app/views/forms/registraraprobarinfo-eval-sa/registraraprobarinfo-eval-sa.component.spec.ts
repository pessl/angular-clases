import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraraprobarinfoEvalSAComponent } from './registraraprobarinfo-eval-sa.component';

describe('RegistraraprobarinfoEvalSAComponent', () => {
  let component: RegistraraprobarinfoEvalSAComponent;
  let fixture: ComponentFixture<RegistraraprobarinfoEvalSAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraraprobarinfoEvalSAComponent]
    });
    fixture = TestBed.createComponent(RegistraraprobarinfoEvalSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
