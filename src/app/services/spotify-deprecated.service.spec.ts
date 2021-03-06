import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import {
  fakeAsync,
  inject,
  TestBed,
  tick
} from '@angular/core/testing';

import { SpotifyDeprecatedService } from './spotify-deprecated.service';


function expectUrl(backend: MockBackend, url: string): void {
  backend.connections.subscribe(c => {
    expect(c.request.url).toBe(url);
    const options: ResponseOptions = new ResponseOptions({
      body: '{"name": "felipe"}'
    });
    c.mockRespond(new Response(options));
  });
}


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
        fakeAsync(
          (spotify: SpotifyDeprecatedService, backend: MockBackend) => {
            expectUrl(backend, 'https://api.spotify.com/v1/tracks/TRACK_ID');

            let res;
            spotify.getTrack('TRACK_ID').subscribe((track: any) => {
              expect(track.name).toBe('felipe');
              res = track;
            });

            // tick();
            expect(res.name).toBe('felipe');
          }
        )
      )
    );
  });

  describe('getArtist', () => {
    it(
      'retrieves using the artist ID',
      inject(
        [
          SpotifyDeprecatedService,
          MockBackend
        ],
        fakeAsync(
          (spotify: SpotifyDeprecatedService, backend: MockBackend) => {
            expectUrl(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');

            let res;
            spotify.getArtist('ARTIST_ID').subscribe((artist: any) => {
              expect(artist.name).toBe('felipe');
              res = artist;
            });

            // tick();
            expect(res.name).toBe('felipe');
          }
        )
      )
    );
  });

  describe('getAlbum', () => {
    it(
      'retrieves using the artist ID',
      inject(
        [
          SpotifyDeprecatedService,
          MockBackend
        ],
        fakeAsync(
          (spotify: SpotifyDeprecatedService, backend: MockBackend) => {
            expectUrl(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');

            let res;
            spotify.getAlbum('ALBUM_ID').subscribe((album: any) => {
              expect(album.name).toBe('felipe');
              res = album;
            });

            // tick();
            expect(res.name).toBe('felipe');
          }
        )
      )
    );
  });

  describe('searchTrack', () => {
    it(
      'searches type and term',
      inject(
        [
          SpotifyDeprecatedService,
          MockBackend
        ],
        fakeAsync(
          (spotify: SpotifyDeprecatedService, backend: MockBackend) => {
            expectUrl(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');

            let res;
            spotify.searchTrack('TERM').subscribe((results: any) => {
              expect(results.name).toBe('felipe');
              res = results;
            });

            // tick();
            expect(res.name).toBe('felipe');
          }
        )
      )
    );
  });
});
