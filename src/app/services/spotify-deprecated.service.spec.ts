import { TestBed } from '@angular/core/testing';

import { SpotifyDeprecatedService } from './spotify-deprecated.service';

describe('SpotifyDeprecatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyDeprecatedService = TestBed.get(SpotifyDeprecatedService);
    expect(service).toBeTruthy();
  });
});
