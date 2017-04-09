import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Codework } from '../models/codework';


@Injectable()
export class CodeListService {

	private codeList: Codework[] = [];
  private iconList: Object = {"platforms":[], "technologies":[]};
  private codeFilters: any = {
    platforms: {},
    technologies: {}
  };
  private sortBy: any = {
    alpha: 0,
    chrono: 1
  }

  constructor(private http: Http) {
  	this.http.get('assets/api/code.json')
  	  			.subscribe(result => this.codeListPopulator( result.json() ) );

    this.http.get('assets/api/icons.json')
            .subscribe(result => this.iconListPopulator( result.json() ) );
  }


  codeListPopulator(result: JSON){
  	
  	let codeworks = JSON.parse(JSON.stringify(result)).code;


  	for(let codework of codeworks){
  		this.codeList.push(new Codework( codework.title, codework.url,
  		codework.images, codework.date, codework.platforms, codework.technologies, codework.blurb,
  		codework.body) );
  	}
  	
  }

  getAllCodes(){
    return this.codeList;
  }





  /* ICON STUFF */

  iconListPopulator(result: JSON){
    let tempIconList = JSON.parse(JSON.stringify(result));

    for(let platform of tempIconList.platforms){
      this.iconList["platforms"].push(platform);
    }
    
    for(let technology of tempIconList.technologies){
      this.iconList["technologies"].push(technology);
    }

    console.log(this.iconList);

  }

  getPlatforms(): string[]{
    return this.iconList["platforms"];
  }

  getTechnologies(): string[]{
    return this.iconList["technologies"];
  }

}
