import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { SpotifyService } from './services/spotify.service';
import { SpotifyDeprecatedService } from './services/spotify-deprecated.service';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'artists/:id', component: ArtistComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    AlbumComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    SpotifyService,
    SpotifyDeprecatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
