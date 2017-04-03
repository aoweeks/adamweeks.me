import { Component, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements AfterViewInit {

	// private circlesWrapper;
	// private circles;
	// private testWrapper;

	private locationCircles;
	private whichCircle: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {

  	this.locationCircles = this.elementRef.nativeElement.querySelectorAll('.location');

    let timer = Observable.timer(0,1250);
  	timer.subscribe(t=> {
        this.addLocationCircle();
    });
  }

  addLocationCircle(){

 

  	let currentCircle = this.whichCircle % 4;
  	this.renderer.setElementClass(this.locationCircles[currentCircle], 'expanding', true);

		let oldCircle = currentCircle == 3 ? 0 : currentCircle + 1;
		this.renderer.setElementClass(this.locationCircles[oldCircle], 'expanding', false);
  	
  	this.whichCircle++;



  }
}
