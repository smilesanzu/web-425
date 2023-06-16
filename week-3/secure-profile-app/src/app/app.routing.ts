/**
	Title: app.routing.ts
    Author: Janis
    Assignment 3.3
    Date: June 2023
    Description: app routing file
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];
