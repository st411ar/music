import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { SpotifyAPIKey } from '../../environments/spotifyApiKey';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyDeprecatedService {
  static BASE_URL = `https://api.spotify.com/v1`;

  constructor(private http: Http) {}


  getAlbum(id: string): Observable<any> {
    return this.query(`/albums/${id}`);
  }

  getArtist(id: string): Observable<any> {
    return this.query(`/artists/${id}`);
  }

  getTrack(id: string): Observable<any> {
    return this.query(`/tracks/${id}`);
  }

  searchTrack(query: string): Observable<any> {
    return this.search(query, `track`);
  }


  private buildRequestOptions(): any {
    const headers: Headers = new Headers({
      Authorization: `Bearer ${SpotifyAPIKey}`
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return options;
  }

  private query(url: string, params?: string[]): Observable<any> {
    let queryUrl = `${SpotifyDeprecatedService.BASE_URL}${url}`;
    if (params) {
      queryUrl = `${queryUrl}?${params.join(`&`)}`;
    }
    const options: RequestOptions = this.buildRequestOptions();

    return this.http.get(queryUrl, options)
      .pipe(
        map((response: Response) => response.json())
      );
  }

  private search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }
}
