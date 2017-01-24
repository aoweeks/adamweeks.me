export class ArtWork {

	private title: string;
	private url: string;
	private date: number;
	private medium: string;
	private references: string[];

	constructor(title: string, url: string, date: number,
				medium: string, references: string[]){

		this.title = title;
		this.url = url;
		this.date = date;
		this.medium = medium;
		this.references = references;

	}

}