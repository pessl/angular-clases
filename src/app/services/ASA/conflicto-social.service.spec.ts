import { TestBed } from '@angular/core/testing';

import { ConflictoSocialService } from './conflicto-social.service';

describe('ConflictoSocialService', () => {
  let service: ConflictoSocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConflictoSocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
