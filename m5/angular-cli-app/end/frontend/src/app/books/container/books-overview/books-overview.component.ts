import { Component, OnInit } from '@angular/core';
import { BookService } from '@app/core/services/book.service';
import { Book } from '@app/shared/models/book';
import { AngularConsoleLoggerService } from 'angular-console-logger';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css'],
})
export class BooksOverviewComponent implements OnInit {
  allReadbooks: Book[];
  allUnreadbooks: Book[];

  activeTabIndex = 0;

  constructor(
    private readonly bookService: BookService,
    private readonly loggingService: AngularConsoleLoggerService
  ) {}

  ngOnInit() {
    this.getBooks(false);
  }

  bookChanged(book: Book) {
    this.bookService.update(book).subscribe(() => {
      this.getBooks(this.currentTabIsReadTab());
      this.loggingService.info('Somebody was changing a book');
    });
  }

  loadBooks() {
    this.getBooks(this.currentTabIsReadTab());
  }

  private getBooks(readAlready: boolean) {
    if (readAlready) {
      this.bookService
        .getAllReadBooks()
        .subscribe((books: Book[]) => (this.allReadbooks = books));
    } else {
      this.bookService
        .getAllUnreadBooks()
        .subscribe((books: Book[]) => (this.allUnreadbooks = books));
    }
  }

  private currentTabIsReadTab() {
    return this.activeTabIndex === 1;
  }
}
