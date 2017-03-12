import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Artwork } from '../models/artwork';

@Injectable()
export class ArtListService{

	// data;
  private artList: Artwork[] = [];
  public artFilters: any = {
    media: {"Charcoal/Graphite": true},
    types: {"Portrait": true},
    references: {"Film/TV": true} 
  };

  constructor(private http: Http) {

  	this.http.get('assets/api/art.json')
  	  			.subscribe(result => this.artListPopulator( result.json() ) );

  }

  artListPopulator(result: JSON){
  	
  	let artworks = JSON.parse(JSON.stringify(result)).art;


  	for(let artwork of artworks){
  		this.artList.push(new Artwork( artwork.title, artwork.url,
  			artwork.additionalimages, artwork.date, artwork.medium,
  			artwork.type, artwork.fileformat, artwork.text,
  			artwork.references) );
  	}
  	
  }


  findArtworkById(id: string){

  	console.log("finding artwork!");

  	for(let artwork of this.artList) {

  		if(artwork.getUrl() == id){
  			return artwork;
  		}
  	}

  	return null;
  }

  getAllArtworks(){
  	return this.artList;
  }

  getFilteredSortedArtworks(){

  	let filteredList: Artwork[] = [];

    for (let artwork of this.artList) {

      let mediaMatch: boolean = false;
      let typesMatch: boolean = false;
      let referencesMatch: boolean = false;

      console.log("Media: ", this.artFilters.media);
      for(let medium in this.artFilters.media) {
        if(this.artFilters.media[medium] == true){
          if(artwork.getMedium() == medium) mediaMatch = true;
        }
      }

      for(let type in this.artFilters.types) {
        if(this.artFilters.types[type] == true){
          if(artwork.getType() == type) typesMatch = true;
        }
      }

      for(let reference in this.artFilters.references) {
        if(this.artFilters.references[reference] == true){
          for(let artworkReference of artwork.getReferences()){
            if(artworkReference == reference) referencesMatch = true;
          }
        }
      }

      if(mediaMatch && typesMatch && referencesMatch) filteredList.push(artwork);

    }

    return filteredList;

  }





}
