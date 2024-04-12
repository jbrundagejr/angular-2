import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../components/book-list/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    addBook: props<{ bookID: string }>(),
    removeBook: props<{ bookID: string }>(),
  },
});

export const BooksAPIActions = createActionGroup({
  source: 'Books API',
  events: {
    retrievedBooks: props<{ books: ReadonlyArray<Book> }>(),
    loadError: props<{ error: any }>(),
  },
});
