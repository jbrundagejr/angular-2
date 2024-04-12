import { createReducer, on } from '@ngrx/store';

import { BooksAPIActions } from './books.actions';
import { Book } from '../components/book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksAPIActions.retrievedBooks, (_state, { books }) => books)
);
