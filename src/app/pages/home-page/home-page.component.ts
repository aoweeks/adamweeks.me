import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [Title]
})
export class HomePageComponent implements OnInit {

  constructor(private title: Title) {
  	this.title.setTitle('Adam Weeks | Art + Code');
  }

  ngOnInit() {
  }

}
