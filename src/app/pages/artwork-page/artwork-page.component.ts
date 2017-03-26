import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Artwork } from '../../models/artwork';
import { ArtListService } from '../../services/art-list.service';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-artwork-page',
  templateUrl: './artwork-page.component.html',
  styleUrls: ['./artwork-page.component.scss']
})
export class ArtworkPageComponent implements OnInit {

  private sub: any;
  private id: string;
  private artwork: Artwork;

  constructor(private router: Router, private route: ActivatedRoute, private artListService: ArtListService) { }
  
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {

        this.id = params['id'];

        // // Retrieve Pet with Id route param
        this.artwork = this.artListService.findArtworkById(this.id);//.subscribe(artwork => this.artwork = artwork);
        if(this.artwork == null){
          this.router.navigateByUrl('/404');
        }
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

}
