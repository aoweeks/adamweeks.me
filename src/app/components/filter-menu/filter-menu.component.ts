import { Component, OnInit } from '@angular/core';
import { ArtListService } from '../../services/art-list.service';

@Component({
  selector: 'filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {

	private media: string[];
	private types: string[];
	private references: string[];

  constructor( private artListService: ArtListService ) {

  }

  ngOnInit() {

  	this.media = this.artListService.getFilterKeys('media');
  	this.types = this.artListService.getFilterKeys('types');
  	this.references = this.artListService.getFilterKeys('references');
  }

}
