import { Component } from '@angular/core';
import { AlbumDataService } from '../album-data.service';
import { MediaServiceService } from '../media-service.service';
import { Album } from './Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {
  
  albumPlaying : Album = {
    album: "Discovery",
    artist: "Daft Punk",
    lenght: 65,
    link: "https://www.youtube.com/embed/mdw1JeDjWH8",
    image: "https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png",
    id: 2
  }

  constructor(
    private mediaService: MediaServiceService,
    private albumDataService: AlbumDataService)
  {
    mediaService.albumPlaying.subscribe(c => this.albumPlaying = c)
  };

  ngOnInit(): void{
    this.albumDataService.getAlbums().subscribe(data => this.albums = data);
  }

  albums : Album[] = [];

  playAlbum(album : Album) : void{
    this.mediaService.playAlbum(album);
  }

}
