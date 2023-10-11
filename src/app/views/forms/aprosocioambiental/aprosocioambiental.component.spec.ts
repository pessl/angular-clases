import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprosocioambientalComponent } from './aprosocioambiental.component';

describe('AprosocioambientalComponent', () => {
  let component: AprosocioambientalComponent;
  let fixture: ComponentFixture<AprosocioambientalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprosocioambientalComponent]
    });
    fixture = TestBed.createComponent(AprosocioambientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
