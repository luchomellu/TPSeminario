import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumPlayerComponent } from './album-player/album-player.component';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumPlayerComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
