import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  Response,
  ResponseOptions
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
          backend.connections.subscribe((c) => {
            expect(c.request.url).toBe('https://api.spotify.com/v1/tracks/TRACK_ID');
            let options: ResponseOptions = new ResponseOptions({
              body: '{"name": "felipe"}'
            });
            c.mockRespond(new Response(options));
          });

          spotify.getTrack('TRACK_ID').subscribe((track: any) => {
            expect(track.name).toBe('felipe');
          });
        }
      )
    );
  });
});
