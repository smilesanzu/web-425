/**
	Title: composer-list.component.ts
    Author: Janis Gonzalez
    Date: June 2023
    Description: Composer list component page
*/

import { Component, OnInit } from '@angular/core';

class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

export class ComposerListComponent implements OnInit {
  composers: Composer[];

  constructor() {
    this.composers = [
      new Composer('Trevor Morris', 'Film Score'),
      new Composer('Akira Yamaoka', 'Video Game Music'),
      new Composer('Jack Wall', 'Video Game Music'),
      new Composer('Cris Velasco', 'Video Game Music'),
      new Composer('Masato Nakamura', 'J-Pop'),
    ];
  }

  ngOnInit(): void {
  }
}
