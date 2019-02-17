import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { LoggerService } from 'my-lib';
import { Observable } from 'rxjs';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {
  currentBooks$: Observable<Book[]>;

  private activeTabIndex = 0;

  constructor(
    private readonly bookService: BookService,
    private readonly customLoggingService: LoggerService
  ) {}

  ngOnInit() {
    this.customLoggingService.info('Somebody was asking for all books');
    this.getAllBooks();
  }

  bookChanged(book: Book) {
    this.bookService.update(book).subscribe(() => {
      this.getAllBooks();
    });
  }

  loadBooks(event: MatTabChangeEvent) {
    this.activeTabIndex = event.index;
    this.getAllBooks();
  }

  private getAllBooks() {
    const read = this.activeTabIndex === 1;
    this.currentBooks$ = this.bookService.getAllBooks(read);
  }
}
