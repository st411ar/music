import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { SpotifyAPIKey } from '../../environments/spotifyApiKey';


@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {}


  searchTrack(query: string): Observable<any> {
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join(`&`);

    const queryURL = `https://api.spotify.com/v1/search?${params}`;

    return this.http.get(queryURL, this.buildRequestOptions());
  }


  private buildRequestOptions(): any {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${SpotifyAPIKey}`
    });
    return { headers: headers };
  }
}
