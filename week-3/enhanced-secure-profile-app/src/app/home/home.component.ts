/**
	Title: home.component.ts
    Author: Janis Gonzalez
    Date: June 2023
    Description: home component
*/


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {}
}
