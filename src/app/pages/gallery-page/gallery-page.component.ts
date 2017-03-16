import { Component, OnInit } from '@angular/core';
import { ArtListService } from '../../services/art-list.service';
import { Artwork } from '../../models/artwork';

import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { FilterMenuComponent } from '../../components/filter-menu/filter-menu.component';

import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GalleryPageComponent implements OnInit {


	media: string[];
	types: string[];
	references: string[];

  loadedThumbnails: Object = new Object;
	
  constructor( private artListService: ArtListService ) { }

  ngOnInit() {

  }

  artworkLoaded(event: any){

    var target = event.target.id;

  	this.loadedThumbnails[target] = true;
    console.log(this.loadedThumbnails);
  }

}
