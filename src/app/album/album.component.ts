import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {SpotifyDeprecatedService} from '../services/spotify-deprecated.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(
      private location: Location,
      private route: ActivatedRoute,
      private spotify: SpotifyDeprecatedService
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params[`id`];
      }
    );
  }

  ngOnInit() {
    this.spotify.getAlbum(this.id)
      .subscribe(
        (album: any) => {
          this.renderAlbum(album);
        }
      );
  }


  back(): boolean {
    this.location.back();
    return false;
  }


  private renderAlbum(album: any): void {
    this.album = album;
  }

}
