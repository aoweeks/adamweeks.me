import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

	debug(input){
		console.log(input.srcElement.attributes.id.name);
		let temp = document.getElementById(input.srcElement.attributes.id.name);
		console.log(temp);
	}
}
