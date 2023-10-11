import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaUiComponent } from './mapa-ui.component';

describe('MapaUiComponent', () => {
  let component: MapaUiComponent;
  let fixture: ComponentFixture<MapaUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaUiComponent]
    });
    fixture = TestBed.createComponent(MapaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
