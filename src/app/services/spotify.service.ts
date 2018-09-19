import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { SpotifyAPIKey } from '../../environments/spotifyApiKey';


@Injectable()
export class SpotifyService {
  static BASE_URL = `https://api.spotify.com/v1`;

  constructor(private http: HttpClient) {}


  searchTrack(query: string): Observable<any> {
    return this.search(query, `track`);
  }


  private buildRequestOptions(): any {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${SpotifyAPIKey}`
    });
    return { headers: headers };
  }

  private query(url: string, params?: string[]): Observable<any> {
    let queryUrl: string = `${SpotifyService.BASE_URL}${url}`;
    if (params) {
      queryUrl = `${queryUrl}?${params.join(`&`)}`;
    }
    const options: any = this.buildRequestOptions();

    return this.http.get(queryUrl, options);
  }

  private search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

}
