import { Component, OnInit } from '@angular/core';

import { booksMock, genresMock } from '../../mock';
import { IBook, IBookGenre } from '../../models';

import { BookGenre } from '../book-genre/book-genre';

@Component({
  selector: 'app-bookshelf',
  imports: [BookGenre],
  templateUrl: './bookshelf.html',
  styleUrl: './bookshelf.css',
})
export class Bookshelf implements OnInit {
  genres: IBookGenre[] = [];
  books: IBook[] = [];

  ngOnInit(): void {
    this.genres = genresMock;
    this.books = booksMock;
  }

  booksByGenre(genreId: string): IBook[] {
    return this.books.filter((book) => book.genreId === genreId);
  }
}
