import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Artwork } from '../models/artwork';

@Injectable()
export class ArtListService{

  private artList: Artwork[] = [];
  private artFilters: any = {
    media: {"Charcoal/Graphite": false, "Digital": true},
    types: {"Portrait": true, "Illustration": true},
    references: {"Film/TV": true, "Music": true, "Video Games": true} 
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
            if(artworkReference == reference){
              referencesMatch = true;
            }
          }
        }
      }

      if(mediaMatch && typesMatch && referencesMatch) filteredList.push(artwork);

    }

    return filteredList;

  }


  /*======== Filter Stuff =========*/


  //Return list of filters (e.g. Charcoal/Graphite) as strings, for a given filter
  public getFilterKeys(filterType: string): string[]{
    return Object.keys(this.artFilters[filterType]);
  }

  //Return whether filter is on, given which filter type, and which filter
  public getFilterValue(filterType: string, whichFilter): boolean{
    console.log(this.artFilters[filterType][whichFilter]);
    return this.artFilters[filterType][whichFilter];
  }

  //Toggle whether a particular filter is on
  public setFilterValue(filterType: string, whichFilter): void{
    this.artFilters[filterType][whichFilter] = !this.artFilters[filterType][whichFilter];
    console.log(this.artFilters);
  }








}
