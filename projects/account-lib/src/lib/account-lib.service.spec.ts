import { TestBed } from '@angular/core/testing';

import { AccountLibService } from './account-lib.service';

describe('AccountLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountLibService = TestBed.get(AccountLibService);
    expect(service).toBeTruthy();
  });
});
