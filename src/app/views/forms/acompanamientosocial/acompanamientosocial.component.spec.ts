import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanamientosocialComponent } from './acompanamientosocial.component';

describe('AcompanamientosocialComponent', () => {
  let component: AcompanamientosocialComponent;
  let fixture: ComponentFixture<AcompanamientosocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanamientosocialComponent]
    });
    fixture = TestBed.createComponent(AcompanamientosocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
