import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import {
  inject,
  TestBed
} from '@angular/core/testing';

import { SpotifyDeprecatedService } from './spotify-deprecated.service';

describe('SpotifyDeprecatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpotifyDeprecatedService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (
            backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions
          ) => {
            return new Http(backend, defaultOptions);
          },
          deps: [
            MockBackend,
            BaseRequestOptions
          ]
        }
      ],
    });
  });

  it('should be created', () => {
    const service: SpotifyDeprecatedService = TestBed.get(SpotifyDeprecatedService);
    expect(service).toBeTruthy();
  });

  describe('getTrack', () => {
    it(
      'retrieves using the track ID',
      inject(
        [
          SpotifyDeprecatedService,
          MockBackend
        ],
        (spotify: SpotifyDeprecatedService, backend: MockBackend) => {
          console.log('logic with injections');
        }
      )
    );
  });
});
