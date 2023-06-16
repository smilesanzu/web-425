import { IComposer } from './composer.interface';

export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Trevor Morris',
        genre: 'Film Score',
      },
      { composerId: 101, fullName: 'Akira Yamaoka', genre: 'Video Game Music' },
      { composerId: 102, fullName: 'Jack Wall', genre: 'Video Game Music' },
      { composerId: 103, fullName: 'Cris Velasco', genre: 'Video Game Music' },
      {
        composerId: 104,
        fullName: 'Masato Nakamura',
        genre: 'J-Pop',
      },
    ];
  }

  getComposers(): Array<IComposer> {
    return this.composers;
  }

  getComposer(composerId: number): IComposer {
    let foundComposer: IComposer;
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        foundComposer = composer;
        break;
      }
    }
    return foundComposer;
  }
}

