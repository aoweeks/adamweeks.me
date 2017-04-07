export class Codework {

	private title: string;
	private url: string;
	private images: Object[];
	private date: string;
	private platforms: Object[];
	private technologies: string[];
	private body: string;

	constructor(title: string, url: string, images: Object[],
		date: string, platforms: Object[],
		technologies: string[], body: string){

		this.title = title;
		this.url = url;
		this.images = images;
		this.date = date;
		this.platforms = platforms;
		this.technologies = technologies;
		this.body = body;

	}

	getTitle(): string{
		return this.title;
	}

	getUrl(): string{
		return this.url;
	}

	getImages(): Object[]{
		return this.images;
	}

	getDate(): string{
		return this.date;
	}


	getPlatforms(): Object[]{
		return this.platforms;
	}

	getTechnologies(): string[]{
		return this.technologies;
	}

	getBody(): string{
		return this.body;
	}

}