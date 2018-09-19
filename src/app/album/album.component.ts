import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';


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
      private spotify: SpotifyService
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


  back(): void {
    this.location.back();
  }


  private renderAlbum(album: any): void {
    this.album = album;
  }

}
