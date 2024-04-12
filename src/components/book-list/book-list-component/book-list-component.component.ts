import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'book-list-component',
  standalone: true,
  imports: [],
  templateUrl: './book-list-component.component.html',
  styleUrl: './book-list-component.component.css',
})
export class BookListComponentComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
