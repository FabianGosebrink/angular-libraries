import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../shared/models/book';

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
    private readonly bookService: BookService
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

    this.bookService.delete(book.id).subscribe(() => {
      this.router.navigate(['/books/overview/']);
    });
  }
}
