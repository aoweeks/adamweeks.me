import { Component, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements AfterViewInit {

	private circlesWrapper;
	private circles;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {

  	this.circlesWrapper = this.elementRef.nativeElement.querySelector('#circles');

    let timer = Observable.timer(0,500);
  	timer.subscribe(t=> {
        this.addLocationCircle();
    });
  }

  addLocationCircle(){
  	// console.log(this.circlesWrapper.nativeElement);
  	// this.circlesWrapper.insertAdjacentHTML('afterBegin', '<text opacity="0.1" stroke="white">Hello</text><circle class="location" />' );
  	// this.lastCircle = this.elementRef.nativeElement.querySelectorAll('.location')[2];
  	// this.renderer.setElementClass(this.lastCircle, 'expanding', true);

  	this.circles += `
  	<circle 
				stroke="#F2642A"
				stroke-width="10"
				stroke-miterlimit="10"
				cx="342.112"
				cy="1038.682"
				r="10"
				opacity="0.5"
				fill="none"

			/>`;

			let lastCircle = this.elementRef.nativeElement.querySelector('circle');
  	  console.log(lastCircle);

  	  if(lastCircle){
  	  	this.renderer.setElementAttribute(lastCircle, 'r', '100');
  	  	window.getComputedStyle(lastCircle, null);
  		}


  }
}
