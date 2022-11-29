import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from './album-list/Album';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {
  private _albumPlaying : Album = {
    album: "Discovery",
    artist: "Daft Punk",
    lenght: 65,
    link: "https://www.youtube.com/embed/mdw1JeDjWH8",
    image: "https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png",
    id: 2
  };
  albumPlaying : BehaviorSubject<Album> = new BehaviorSubject(this._albumPlaying);

  constructor() {}

  playAlbum(album: Album) {
    if(album.id != this._albumPlaying.id){
      this._albumPlaying = {...album};
      console.log(this._albumPlaying)
    }
    else{
      console.log("Ya se esta reproduciendo");
    }
    this.albumPlaying.next(this._albumPlaying);
  }

  
}
