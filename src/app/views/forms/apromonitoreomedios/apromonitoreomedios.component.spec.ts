import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApromonitoreomediosComponent } from './apromonitoreomedios.component';

describe('ApromonitoreomediosComponent', () => {
  let component: ApromonitoreomediosComponent;
  let fixture: ComponentFixture<ApromonitoreomediosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApromonitoreomediosComponent]
    });
    fixture = TestBed.createComponent(ApromonitoreomediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
