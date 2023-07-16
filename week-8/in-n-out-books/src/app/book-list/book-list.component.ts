/*
  Title: book-list.component.ts
  Author: Janis Gonzalez
  Date: July 2023
  Description: The component logic in order to fetch list of books and the details
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  books: Array<IBook> = []
  book: IBook | null = null

  constructor(private booksService: BooksService, private dialog: MatDialog) {

    this.booksService.getBooks().subscribe((res: { [key: string]: any }) => {
      console.log(res)
      for(let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = []
          if(res[key].details.authors) {
            authors = res[key].details.authors.map((author: {name: string}) => author.name)
          }

          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            authors: authors,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    const foundBook = this.books.find(book => book.isbn === isbn);
    if (foundBook) {
      this.book = foundBook;
    } else {
      this.book = null
    }

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
