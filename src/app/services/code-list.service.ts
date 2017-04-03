import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Codework } from '../models/codework';


@Injectable()
export class CodeListService {

	private codeList: Codework[] = [];
  private codeFilters: any = {
    platforms: {},
    technologies: {}
  };
  private sortBy: any = {
    alpha: 0,
    chrono: 1
  }

  constructor(private http: Http) {
  	this.http.get('assets/api/art.json')
  	  			.subscribe(result => this.codeListPopulator( result.json() ) );
  }


  codeListPopulator(result: JSON){
  	
  	let codeworks = JSON.parse(JSON.stringify(result)).art;


  	for(let codework of codeworks){
  		this.codeList.push(new Codework( codework.title, codework.url,
  		codework.images, codework.date, 
  		codework.type, codework.platforms, codework.technologies,
  		codework.body) );
  	}
  	
  }

}
