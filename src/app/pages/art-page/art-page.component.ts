import { Component, OnInit } from '@angular/core';
import { ArtListService } from '../../services/art-list.service';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ArtPageComponent implements OnInit {

  constructor(artListService: ArtListService) { }

  ngOnInit() {
  }

}
