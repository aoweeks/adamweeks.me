import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}

})
export class CodePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
