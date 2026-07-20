import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenre } from './book-genre';

describe('BookGenre', () => {
  let component: BookGenre;
  let fixture: ComponentFixture<BookGenre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookGenre],
    }).compileComponents();

    fixture = TestBed.createComponent(BookGenre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
