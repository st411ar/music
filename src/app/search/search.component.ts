import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  query: string;

  constructor(
      private route: ActivatedRoute,
      private spotify: SpotifyService
  ) {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.query = params[`query`] || ``;
      }
    );
  }

  ngOnInit() {}


  submit(query: string): void {
    if (this.query) {
      this.spotify.searchTrack(this.query)
        .subscribe(
          (results: any) => {
            console.log(results);
          }
        );
    }
  }

}
