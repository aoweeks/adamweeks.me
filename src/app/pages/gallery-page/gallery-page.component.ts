import { Component, OnInit } from '@angular/core';
import { ArtListService } from '../../services/art-list.service';
import { Artwork } from '../../models/artwork';

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
	
  constructor( private artListService: ArtListService ) { }

  ngOnInit() {
  	this.artworks = this.artListService.getAllArtworks();
  }

  artworkLoaded(title: string){
  	console.log(title + " loaded!");
  }

}
