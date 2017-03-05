import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Artwork } from '../models/artwork';

@Injectable()
export class ArtListService{

	data;
  private artList: Artwork[] = [];

  constructor(private http: Http) {
  	console.log("ALService running!");


  	this.http.get('assets/api/art.json')
  	  			.subscribe(result => this.artListPopulator( result.json() ) );

  	 

  }

  artListPopulator(result: JSON){
  	
  	let artworks = JSON.parse(JSON.stringify(result)).art;


  	for(let artwork of artworks){
  		this.artList.push(new Artwork( artwork.title, artwork.url, artwork.date, artwork.medium, artwork.references) );
  	}

  	console.log(this.artList);
  	
  }


  findArtworkById(id: string){

  	console.log("finding artwork!");

  	for(let artwork of this.artList){
  		
  		console.log( artwork.getUrl() );

  		if(artwork.getUrl() == id){
  			return artwork;
  		}
  	}

  	return null;
  }

  getAllArtworks(){
  	return this.artList;
  }





}
