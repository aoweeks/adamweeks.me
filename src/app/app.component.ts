import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(){
	}

	private backgroundOffset: number;


	getBackgroundPosition(elemID: string = ""): string {
		let top = elemID;

		if(elemID){
			// let element = document.getElementById('navbar');
			// element.style.
		}
		return "0px -" + (this.backgroundOffset + top) + "px";
	}

	@HostListener('window:scroll', ['$event']) 
	updateBackgroundPosition(event) {
	  this.backgroundOffset = document.body.scrollTop;
	}	

	title = 'App works!';
}
