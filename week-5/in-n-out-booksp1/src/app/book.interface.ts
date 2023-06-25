/**
Title: book.interface.ts
Author: Janis Gonzalez
Date: June 25 2023
Description: book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}
