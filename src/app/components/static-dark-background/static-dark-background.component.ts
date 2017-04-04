import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'static-dark-background',
  templateUrl: './static-dark-background.component.html',
  styleUrls: ['./static-dark-background.component.scss']
})
export class StaticDarkBackgroundComponent implements OnInit {

	private backgroundPosition: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
  	this.updateBackgroundPosition(null);
  }

  @HostListener('window:resize', ['$event']) 
	updateBackgroundPosition(event) {
  	let top:number  = this.el.nativeElement.getBoundingClientRect().top;
  	let left:number = this.el.nativeElement.getBoundingClientRect().left;

		this.backgroundPosition = -left + "px " + -top + "px";
		console.log(this.backgroundPosition);
	}



}
