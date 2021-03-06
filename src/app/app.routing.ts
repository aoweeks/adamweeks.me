import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtPageComponent } from './pages/art-page/art-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ArtworkPageComponent } from './pages/artwork-page/artwork-page.component';
import { CodePageComponent } from './pages/code-page/code-page.component';
import { CodeworkPageComponent } from './pages/codework-page/codework-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';


const APP_ROUTES: Routes = [
	{ path: '', component: HomePageComponent, pathMatch: 'full' },
	{ path: 'art', component: GalleryPageComponent }, //Need to change back to artpagecomponent later
	{ path: 'art/gallery', component: GalleryPageComponent, data: { title: 'Gallery' } },
	{ path: 'art/:id', component: ArtworkPageComponent },
	{ path: 'code', component: CodePageComponent },
	{ path: 'code/:id', component: CodeworkPageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: '404', component: Error404PageComponent },
	{ path: '**', redirectTo: '/404' }
];


export const Routing: any = RouterModule.forRoot(APP_ROUTES);