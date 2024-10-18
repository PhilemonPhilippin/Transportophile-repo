import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './features/explore/explore.component';

export const routes: Routes = [
  { path: 'explore', component: ExploreComponent },
  { path: '', component: HomeComponent },
];
