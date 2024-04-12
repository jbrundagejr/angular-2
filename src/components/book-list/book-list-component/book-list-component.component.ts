import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../books.model';

@Component({
  selector: 'book-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list-component.component.html',
  styleUrl: './book-list-component.component.css',
})
export class BookListComponentComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
