import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780007488308',
        title: 'The Lord of the Rings: The Fellowship of the  Ring',
        description: "The Fellowship of the Ring is the first of the three volumes that comprise The Lord of the Rings novel. Set in a mythical universe of Middle-earth, this book continues in the same tone as The Hobbit. The Dark Lord, Sauron, is the Lord of the Rings, who is on a mission to reclaim the One Ring and use it to enslave all of Middle-earth.",
        numOfPages: 576,
        authors: ['JRR Tolkien']
      },
      {
        isbn: '9780345339713',
        title: 'The Lord of the Rings: The Two Towers',
        description: `The Fellowship is scattered. Some brace hopelessly for war against the ancient evil of Sauron. Others must contend with the treachery of the wizard Saruman. Only Frodo and Sam are left to take the One Ring, ruler of the accursed Rings of Power, to be destroyed in Mordor, the dark realm where Sauron is supreme. Their guide is Gollum, deceitful and obsessive slave to the corruption of the Ring.`,
        numOfPages: 416,
        authors: ['JRR Tolkien']
      },
      {
        isbn: '9780345339737',
        title: 'The Lord of the Rings: The Return of the King',
        description: `While the evil might of the Dark Lord Sauron swarms out to conquer all Middle-earth, Frodo and Sam struggle deep into Mordor, seat of Sauron’s power. To defeat the Dark Lord, the One Ring, ruler of the accursed Rings of Power, must be destroyed in the fires of Mount Doom. But the way is impossibly hard, and Frodo is weakening. Weighed down by the compulsion of the Ring, he begins finally to despair.`,
        numOfPages: 512,
        authors: [' JRR Tolkien']
      },
      {
        isbn: '9780345325815',
        title: 'The Silmarillion',
        description: `Those interested in J.R.R. Tolkien's Middle Earth should not be without this grand volume that tells the tragic tale of the struggle for control of the Silmarils, a struggle that would determine the history of the world long before the War of the Ring.`,
        numOfPages: 480,
        authors: ['JRR Tolkien']
      },
      {
        isbn: '9781328791825',
        title: `Beren And Lúthien`,
        description: `The tale of Beren and Lúthien was, or became, an essential element in the evolution of The Silmarillion, the myths and legends of the First Age of the World conceived by J.R.R. Tolkien. Returning from France and the battle of the Somme at the end of 1916, he wrote the tale in the following year.`,
        numOfPages: 288,
        authors: ['JRR Tolkien']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
