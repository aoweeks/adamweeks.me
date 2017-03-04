import { Component, OnInit } from '@angular/core';
import { ArtListService } from '../../services/art-list.service';

@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.scss']
})
export class ArtPageComponent implements OnInit {

  constructor(artListService: ArtListService) { }

  ngOnInit() {
  }

}
