import { Component, signal } from '@angular/core';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Bookshelf } from './components/bookshelf/bookshelf';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Bookshelf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo-library');
}
