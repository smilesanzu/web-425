/**
	Title: app.component.ts
    Author: Janis Gonzalez
    Date: June 2023
    Description: root component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;

  assignment: string = 'Exercise 2.3 - Data Binding';
}
