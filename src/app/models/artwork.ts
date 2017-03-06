export class Artwork {

	private title: string;
	private url: string;
	private additionalImages: Object[];
	private date: string;
	private medium: string;
	private type: string;
	private fileFormat: string;
	private text: string;
	private references: string[];

	constructor(title: string, url: string, additionalImages: Object[],
		date: string, medium: string, type: string, fileFormat: string,
		text: string, references: string[]){

		this.title = title;
		this.url = url;
		this.additionalImages = additionalImages;
		this.date = date;
		this.medium = medium;
		this.type = type;
		this.fileFormat = fileFormat;
		this.text = text;
		this.references = references;

	}

	getTitle(){
		return this.title;
	}

	getUrl(){
		return this.url;
	}

	getAdditionalImages(){
		return this.additionalImages;
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

	getFileFormat(){
		return this.fileFormat;
	}

	getText(){
		return this.text;
	}

	getReferences(){
		return this.references;
	}


}