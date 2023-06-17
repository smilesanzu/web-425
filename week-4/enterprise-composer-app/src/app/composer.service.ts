/**
 Title: composer.service.ts
 Author: Janis Gonzalez
 Date: June 18, 2023
 Description: Service class for Composer objects
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;


  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: 'Trevor Morris', genre: 'Film Score',
      },
      {
        composerId: 101, fullName: 'Akira Yamaoka', genre: 'Video Game Music'
      },
      {
        composerId: 102, fullName: 'Jack Wall', genre: 'Video Game Music'
      },
      {
        composerId: 103, fullName: 'Cris Velasco', genre: 'Video Game Music'
      },
      {
        composerId: 104, fullName: 'Masato Nakamura', genre: 'J-Pop',
      }
    ]
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
      composers.filter(composer =>composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}

