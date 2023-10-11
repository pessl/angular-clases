import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproentipublicasprivadasComponent } from './aproentipublicasprivadas.component';

describe('AproentipublicasprivadasComponent', () => {
  let component: AproentipublicasprivadasComponent;
  let fixture: ComponentFixture<AproentipublicasprivadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AproentipublicasprivadasComponent]
    });
    fixture = TestBed.createComponent(AproentipublicasprivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
