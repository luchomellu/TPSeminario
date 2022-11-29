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
  
  constructor(
    private mediaService: MediaServiceService,
    private albumDataService: AlbumDataService)
  {};

  ngOnInit(): void{
    this.albumDataService.getAlbums().subscribe(data => this.albums = data);
  }

  albums : Album[] = [];

  playAlbum(album : Album) : void{
    this.mediaService.playAlbum(album);
  }

}
