import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtPageComponent } from './pages/art-page/art-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ArtworkPageComponent } from './pages/artwork-page/artwork-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CodeworkPageComponent } from './pages/codework-page/codework-page.component';

import { CodePageComponent } from './pages/code-page/code-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';

import { ArtListService } from './services/art-list.service';
import { CodeListService } from './services/code-list.service';
import { BackgroundTrackerService } from './services/background-tracker.service';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { SafePipe } from './pipes/safe.pipe';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { StaticDarkBackgroundComponent } from './components/static-dark-background/static-dark-background.component';
import { IconComponent } from './components/icon/icon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArtPageComponent,
    AboutPageComponent,
    CodePageComponent,
    GalleryPageComponent,
    ArtworkPageComponent,
    Error404PageComponent,
    SpinnerComponent,
    FilterMenuComponent,
    SafePipe,
    FooterBarComponent,
    CodeworkPageComponent,
    StaticDarkBackgroundComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    NgbModule.forRoot()
  ],
  providers: [
    ArtListService,
    CodeListService,
    BackgroundTrackerService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
