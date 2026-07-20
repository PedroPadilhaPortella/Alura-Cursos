import { Component, input } from '@angular/core';
import { IBook } from '../../models';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  book = input.required<IBook>();
  highlightColor = input<string>('#82CFFA');

  toggleFavorite() {
    this.book().favorite = !this.book().favorite;
  }
}
