import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundTrackerService {

	xOffset: number = 0;
	yOffset: number = 0;

  constructor() { }

  log(){
  	console.log('hi');
  }
}
