import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoressocialesComponent } from './actoressociales.component';

describe('ActoressocialesComponent', () => {
  let component: ActoressocialesComponent;
  let fixture: ComponentFixture<ActoressocialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActoressocialesComponent]
    });
    fixture = TestBed.createComponent(ActoressocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
