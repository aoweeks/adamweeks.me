import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtPageComponent } from './art-page/art-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CodePageComponent } from './code-page/code-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArtPageComponent,
    AboutPageComponent,
    CodePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
