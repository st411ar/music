import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(
      private location: Location,
      private route: ActivatedRoute,
      private spotify: SpotifyService
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params[`id`];
      }
    );
  }

  ngOnInit() {
    this.spotify.getArtist(this.id)
      .subscribe((artist: any) => {
        this.renderArtist(artist);
      });
  }


  back(): boolean {
    this.location.back();
    return false;
  }


  private renderArtist(artist: any): void {
    this.artist = artist;
  }

}
