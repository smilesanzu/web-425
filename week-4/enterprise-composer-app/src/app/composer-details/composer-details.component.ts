/*
Title: composer-details.component.ts
Author: Janis Gonzalez
Date: June 2023
Description: composer details component
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer | null = null;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId') ?? '0', 10);

    if (!isNaN(this.composerId)) {
      this.composer = this.composerService.getComposer(this.composerId)
    }
  }

  ngOnInit(): void {}
}
