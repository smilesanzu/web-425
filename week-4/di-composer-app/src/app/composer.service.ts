import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})

export class ComposerService {

  composers: Array<IComposer>

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

  getComposers() {
    return this.composers
  }

  getComposer(composerId: number) {
    for(let composer of this.composers) {
      if(composer.composerId === composerId) return composer
    }
    return null
  }
}


