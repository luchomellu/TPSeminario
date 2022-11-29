import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album-list/Album';

const Url = 'https://63854a5bbeaa6458265ce572.mockapi.io/super-spotify'
@Injectable({
  providedIn: 'root'
})
export class AlbumDataService {

  constructor(private http: HttpClient) { }

  public getAlbums() : Observable<Album[]>{
    return this.http.get<Album[]>(Url);
  }
}
