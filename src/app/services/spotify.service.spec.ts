import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed } from '@angular/core/testing';

import { SpotifyService } from './spotify.service';


describe('Spotify Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpotifyService,
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
});