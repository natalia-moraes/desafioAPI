import { TestBed } from '@angular/core/testing';

import { FinderUserService } from './finder-user.service';

describe('FinderUserService', () => {
  let service: FinderUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinderUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
