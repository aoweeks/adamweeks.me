import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Artwork } from '../models/artwork';

@Injectable()
export class ArtListService{

	data;
  artList: Artwork[] = [];

  constructor(private http: Http) {
  	console.log("ALService running!");


  	this.http.get('assets/api/art.json')
  	  			.subscribe(result => this.ArtworkPopulator( result.json() ) );

  	 

  }

  ArtworkPopulator(result: JSON){
  	
  	let artworks = JSON.parse(JSON.stringify(result)).art;


  	for(let artwork of artworks){
  		this.artList.push(new Artwork( artwork.title, artwork.url, artwork.date, artwork.medium, artwork.references))
  	}
  	
  }

}
