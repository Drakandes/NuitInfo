import { TestBed } from '@angular/core/testing';

import { PlayerStatService } from './player-stat.service';

describe('PlayerStatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerStatService = TestBed.get(PlayerStatService);
    expect(service).toBeTruthy();
  });
});
