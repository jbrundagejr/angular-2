import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishList';
import { AddWishFormComponent } from '../../components/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from '../../components/wish-filter/wish-filter.component';
import { WishListComponent } from '../../components/wish-list/wish-list.component';
import { BookListComponentComponent } from '../../components/book-list/book-list-component/book-list-component.component';
import { BookCollectionComponent } from '../../components/book-collection/book-collection.component';
import { selectBookCollection, selectBooks } from '../../store/books.selectors';
import { BooksActions, BooksAPIActions } from '../../store/books.actions';
import { GoogleBooksService } from '../../components/book-list/books.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    BookListComponentComponent,
    BookCollectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items: WishItem[] = [
    new WishItem('Learn TypeScript', true),
    new WishItem('Learn Angular'),
    new WishItem('Deploy an Angular App on Netlify'),
  ];

  filter: any = () => {};

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookID: string) {
    this.store.dispatch(BooksActions.addBook({ bookID }));
  }

  onRemove(bookID: string) {
    this.store.dispatch(BooksActions.removeBook({ bookID }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksAPIActions.retrievedBooks({ books }))
      );
  }
}
