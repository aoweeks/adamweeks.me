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
  private sortBy: any = {
    alpha: 0,
    chrono: 1
  }

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

  getFilteredSortedArtworks(): Artwork[]{

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


  /*========= Sort Stuff ==========*/

  public setSortType(sortType: string): void{

  
    if(this.sortBy[sortType] == 1){
      this.sortBy[sortType] = 2;
    }
    else{
      this.sortBy[sortType] = 1;
    }

    for(let sortOption in this.sortBy){
      if(sortOption != sortType) this.sortBy[sortOption] = 0;
    }

    this.sortArtworks();
  }

  public getSortValue(sortType: string): number{

    return this.sortBy[sortType];
  }


  private sortArtworks(): void{

    let sortProperty: string;
    let sortAscending: boolean;

    for(let sortOption in this.sortBy){
      if(this.sortBy[sortOption] == 1){
        sortProperty = sortOption;
        sortAscending = true;
        break;
      } else if(this.sortBy[sortOption] == 2){
        sortProperty = sortOption;
        sortAscending = false;
        break;
      }
    }

    if(sortProperty == 'alpha'){
      this.artList.sort(function(a, b) {
        let aUrl = a.getUrl().toUpperCase(); // ignore upper and lowercase
        let bUrl = b.getUrl().toUpperCase(); // ignore upper and lowercase

        if (aUrl < bUrl) {
          return sortAscending ?  -1 : 1;
        }
        else {
          return sortAscending ?  1 : -1;
        }

      });


    }else if(sortProperty == 'chrono'){
      this.artList.sort(function(a, b) {
        let aUrl = a.getDate().toUpperCase(); // ignore upper and lowercase
        let bUrl = b.getDate().toUpperCase(); // ignore upper and lowercase

        if (aUrl < bUrl) {
          return sortAscending ?  1 : -1;
        }
        else if (aUrl > bUrl){
          return sortAscending ?  -1 : 1;
        }
        else{
          return 0;
        }

      });
    }

  }

  /*======== Filter Stuff =========*/


  //Return list of filters (e.g. Charcoal/Graphite) as strings, for a given filter
  public getFilterKeys(filterType: string): string[]{
    return Object.keys(this.artFilters[filterType]);
  }

  //Return whether filter is on, given which filter type, and which filter
  public getFilterValue(filterType: string, whichFilter): boolean{

    return this.artFilters[filterType][whichFilter];
  }

  //Toggle whether a particular filter is on
  public setFilterValue(filterType: string, whichFilter): void{
    this.artFilters[filterType][whichFilter] = !this.artFilters[filterType][whichFilter];
  }

  public setOrClearAllFilters(filterType: string, filterValue: boolean): void{
     for(let filter in this.artFilters[filterType]){
       this.artFilters[filterType][filter] = filterValue;
     }
  }

  //Loops through all filters and turns them off
  public resetAllFiltersOfAllTypes(): void{
    for (let filterType in this.artFilters){
      for (let filter in this.artFilters[filterType]){
        this.artFilters[filterType][filter] = true;
      }
    }
  }

  public ifAnyFiltersSet(filterType: string): boolean{
   let filtersSet: boolean = false;

   for(let filter in this.artFilters[filterType]){
      if(this.artFilters[filterType][filter] == false){
        filtersSet = true;
        break;
      }
    }


    return filtersSet;
  }


  /*===============================*/

  /*Take the current artwork and whether we're looking for the next artwork or not as arguments. Search the filtered, sorted
  list of artworks and return the URL of the next/previous one */
  public getAdjacentArtworks(currentArtworkUrl: string): string[]{

    let allFilteredSortedArtworks: Artwork[] = this.getFilteredSortedArtworks();
    let currentArtwork: Artwork = allFilteredSortedArtworks[currentArtworkUrl]; //No

    let prevArtwork: Artwork;
    let nextArtwork: Artwork;

    if(allFilteredSortedArtworks[currentArtworkUrl].position == allFilteredSortedArtworks.length){
      //prevArtwork = allFilteredSortedArtworks[]
    }
    else{
      prevArtwork =  allFilteredSortedArtworks[allFilteredSortedArtworks.length - 1];
    }

    if(allFilteredSortedArtworks[currentArtworkUrl] == allFilteredSortedArtworks.length){
      //prevArtwork = allFilteredSortedArtworks[]
    }
    else{
      nextArtwork = allFilteredSortedArtworks[0];
    }


    return ['',''];
  }

}


