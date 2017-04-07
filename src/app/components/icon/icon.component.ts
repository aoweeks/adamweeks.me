import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'aw-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit{

  @Input()iconName: string;
  private iconBody: string;

  constructor(private http: Http) {
 
  }

  ngOnInit(){
  	this.getIcon(this.formatIconName(this.iconName));
  }

  /* Look for SVG file matching icon, read in file and return SVG
  as string to be stored as iconBody*/ 
  getIcon(whichIcon: string): string{

  	this.http.get('assets/images/icons/' + whichIcon + '.svg')
			.subscribe(result => this.addNewIcon(whichIcon, result));


		return this.iconBody;
  }

  addNewIcon(iconName: string, iconBody: any){
    console.log(iconName, iconBody._body);
    this.iconBody = iconBody._body;
    return iconBody;
  }

  formatIconName(iconName: string):string{
  	if(iconName){
    	iconName = iconName.replace(/\s/g, '');
    	return iconName.toLowerCase();
  	}
  }

}
