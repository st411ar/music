import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private spotify: SpotifyService
  ) {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.query = params[`query`] || ``;
      }
    );
  }

  ngOnInit() {
    this.search();
  }


  submit(query: string): void {
    this.router.navigate([`search`], { queryParams: { query: query } })
      .then(_ => this.search());
  }


  private renderResults(results: any): void {
    this.results = null;
    if (results && results.tracks && results.tracks.items) {
      this.results = results.tracks.items;
    }
  }

  private search(): void {
    if (this.query) {
      this.spotify.searchTrack(this.query)
        .subscribe(
          (results: any) => {
            this.renderResults(results);
          }
        );
    }
  }

}
