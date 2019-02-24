import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '@app/core/services/book.service';
import { LoggingService } from '@app/core/services/logging.service';
import { Book } from '@app/shared/models/book';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly bookService: BookService,
    private readonly loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.book$ = this.activatedRoute.params.pipe(
      map(p => +p.id),
      switchMap(id => this.bookService.getSingle(id))
    );
  }

  deleteBook(book: Book) {
    if (!confirm('really delete')) {
      return;
    }

    this.bookService
      .delete(book.id)
      .pipe(tap(() => this.loggingService.info('Somebody was deleting a book')))
      .subscribe(() => {
        this.router.navigate(['/books/overview/']);
      });
  }
}
