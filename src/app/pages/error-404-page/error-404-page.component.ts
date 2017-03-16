import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-error404',
  templateUrl: './error-404-page.component.html',
  styleUrls: ['./error-404-page.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class Error404PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
