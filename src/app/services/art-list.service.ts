import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Artwork } from '../models/artwork';

@Injectable()
export class ArtListService {

  Artworks: Artwork[] = [];

  constructor(private http: Http) { }

  ArtworkPopulator(){


  }

}
