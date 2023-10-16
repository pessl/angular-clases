import { TestBed } from '@angular/core/testing';

import { UnidadFiscalizableService } from './unidad-fiscalizable.service';

describe('UnidadFiscalizableService', () => {
  let service: UnidadFiscalizableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadFiscalizableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
