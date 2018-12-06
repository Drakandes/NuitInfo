import { TestBed } from '@angular/core/testing';

import { PathExplorationService } from './path-exploration.service';

describe('PathExplorationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathExplorationService = TestBed.get(PathExplorationService);
    expect(service).toBeTruthy();
  });
});
