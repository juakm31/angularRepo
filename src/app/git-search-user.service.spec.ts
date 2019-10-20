import { TestBed } from '@angular/core/testing';

import { GitSearchUserService } from './git-search-user.service';

describe('GitSearchUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitSearchUserService = TestBed.get(GitSearchUserService);
    expect(service).toBeTruthy();
  });
});
