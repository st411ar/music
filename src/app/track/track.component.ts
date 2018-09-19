import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html'
})
export class TrackComponent implements OnInit {
  id: string;

  constructor(
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
    this.spotify.getTrack(this.id)
      .subscribe(
        (result: any) => {
          this.renderTrack(result);
        }
      );
  }


  private renderTrack(result: any): void {
    console.log(`renderTrack()`);
  }

}
