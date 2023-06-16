/**
	Title: sign-in.component.ts
    Author: Janis Gonzalez
    Date: 11 June 2023
    Description: sign-in component file
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLogin: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  signIn() {
    this.isLogin = true;

    this.router.navigate(['/home'], { queryParams: { isLogin: this.isLogin }, skipLocationChange: true});
  }
}
