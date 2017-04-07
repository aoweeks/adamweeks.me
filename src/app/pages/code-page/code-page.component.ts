import { Component, OnInit } from '@angular/core';
import { CodeListService } from '../../services/code-list.service';
import { Codework } from '../../models/codework';


@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.scss']

})
export class CodePageComponent implements OnInit {

  constructor(private codeListService: CodeListService	) { }

  ngOnInit() {
  	//this.iconService.getIcon("Android");
  }

}
