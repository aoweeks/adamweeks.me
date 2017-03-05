export class Artwork {

	private title: string;
	private url: string;
	private date: string;
	private medium: string;
	private type: string;
	private text: string;
	private references: string[];

	constructor(title: string, url: string, date: number,
				medium: string, type: string, text: string, references: string[]){

		this.title = title;
		this.url = url;
		this.date = date;
		this.medium = medium;
		this.type = type;
		this.text = text;
		this.references = references;

	}

	getTitle(){
		return this.title;
	}

	getUrl(){
		return this.url;
	}

	getDate(){
		return this.date;
	}

	getMedium(){
		return this.medium;
	}

	getType(){
		return this.type;
	}

	getText(){
		return this.text;
	}

	getReferences(){
		return this.references;
	}


}