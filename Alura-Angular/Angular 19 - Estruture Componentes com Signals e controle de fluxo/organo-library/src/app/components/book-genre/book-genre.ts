import { Component, input } from '@angular/core';

import { IBook, IBookGenre } from '../../models';
import { Book } from '../book/book';

@Component({
  selector: 'app-book-genre',
  imports: [Book],
  templateUrl: './book-genre.html',
  styleUrl: './book-genre.css',
})
export class BookGenre {
  genre = input.required<IBookGenre>();
  books = input.required<IBook[]>();
}
