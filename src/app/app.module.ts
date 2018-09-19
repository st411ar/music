import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SpotifyService } from './services/spotify.service';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
