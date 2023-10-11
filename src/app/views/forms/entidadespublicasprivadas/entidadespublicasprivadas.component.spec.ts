import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadespublicasprivadasComponent } from './entidadespublicasprivadas.component';

describe('EntidadespublicasprivadasComponent', () => {
  let component: EntidadespublicasprivadasComponent;
  let fixture: ComponentFixture<EntidadespublicasprivadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadespublicasprivadasComponent]
    });
    fixture = TestBed.createComponent(EntidadespublicasprivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
