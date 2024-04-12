import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookID }) =>
    state.filter((id) => id !== bookID)
  ),
  on(BooksActions.addBook, (state, { bookID }) => {
    if (state.indexOf(bookID) > -1) return state;

    return [...state, bookID];
  })
);
