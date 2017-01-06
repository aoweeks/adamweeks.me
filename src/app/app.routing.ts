import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtPageComponent } from './pages/art-page/art-page.component';
import { CodePageComponent } from './pages/code-page/code-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const APP_ROUTES: Routes = [
	{ path: '', component: HomePageComponent, pathMatch: 'full' },
	{ path: 'art', component: ArtPageComponent },
	{ path: 'code', component: CodePageComponent },
	{ path: 'about', component: AboutPageComponent }
];


export const Routing: any = RouterModule.forRoot(APP_ROUTES);