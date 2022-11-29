import { Component } from '@angular/core';
import { AlbumDataService } from '../album-data.service';
import { Album } from '../album-list/Album';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  constructor(private albumDataService: AlbumDataService){};

  postAlbum(form : {album: string, artist: string, lenght: number, link: string, image: string}) {
    this.albumDataService.postAlbum(form);
  }

}
