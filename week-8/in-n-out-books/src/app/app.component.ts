/*
  Title: app.component.ts
  Author: Janis Gonzalez
  Date: July 2023
  Description: App component file
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  assignment: string

  constructor() {
    this.assignment = "Welcome to In-N-Out Books"
  }

}
