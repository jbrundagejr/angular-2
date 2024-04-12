import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FirstComponent } from '../pages/first/first.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first', component: FirstComponent },
  { path: '**', component: NotFoundComponent },
];
