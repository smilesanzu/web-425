import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  isbns: Array<string>

  constructor(private http: HttpClient) {
    this.isbns = [
      '0345339681',
      '0261103571',
      '9780593099322',
      '9780261102361',
      '9780261102378',
      '9780590302715',
      '9780316769532',
      '9780743273565',
      '9780590405959'
    ]
  }

  getBooks() {
    let params = new HttpParams()

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json')
    params = params.append('jscmd', 'details')

    console.log(params)

    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
