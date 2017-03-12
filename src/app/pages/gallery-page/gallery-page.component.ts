import { Component, OnInit } from '@angular/core';
import { ArtListService } from '../../services/art-list.service';
import { Artwork } from '../../models/artwork';

import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

	artworks: Artwork[];

	media: string[];
	types: string[];
	references: string[];

  loadedThumbnails: Object = new Object;
	
  constructor( private artListService: ArtListService ) { }

  ngOnInit() {
  	this.artworks = this.artListService.getFilteredSortedArtworks();

  }

  artworkLoaded(event: any){

    var target = event.target.id;

  	this.loadedThumbnails[target] = true;
    console.log(this.loadedThumbnails);
  }

}
