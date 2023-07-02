/**
 * Title: wishlist-create.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Janis Gonzalez
 * Date: July 1, 2023
 * Description:  in-n-out-booksp4 app
*/
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    });

    this.item = {} as IWishlistItem;
  }
}
