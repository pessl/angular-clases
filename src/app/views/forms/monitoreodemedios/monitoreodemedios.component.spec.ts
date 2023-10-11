import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreodemediosComponent } from './monitoreodemedios.component';

describe('MonitoreodemediosComponent', () => {
  let component: MonitoreodemediosComponent;
  let fixture: ComponentFixture<MonitoreodemediosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoreodemediosComponent]
    });
    fixture = TestBed.createComponent(MonitoreodemediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
