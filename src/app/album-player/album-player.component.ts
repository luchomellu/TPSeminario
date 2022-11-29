import { Component } from '@angular/core';
import { Album } from '../album-list/Album';
import { MediaServiceService } from '../media-service.service';

@Component({
  selector: 'app-album-player',
  templateUrl: './album-player.component.html',
  styleUrls: ['./album-player.component.scss']
})
export class AlbumPlayerComponent {

  albumPlaying : Album = {
    album: "Discovery",
    artist: "Daft Punk",
    lenght: 65,
    link: "https://www.youtube.com/embed/mdw1JeDjWH8",
    image: "https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png",
    id: 2
  }
  constructor(private mediaService: MediaServiceService){
    mediaService.albumPlaying.subscribe(c => this.albumPlaying = c
                                              )
  };
}
