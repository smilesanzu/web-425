/**
	Title: composer-list.component.ts
    Author: Janis Gonzalez
    Date: June 18, 2023
    Description: Composer list component page
*/


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers()
  }

  ngOnInit(): void {}

}
