import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '@app/shared/models/book';
import { AngularRatingService } from 'angular-rating';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = [];

  @Output() bookChanged = new EventEmitter();

  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(public angularRatingService: AngularRatingService) {}

  ngOnInit() {}

  toggleBookRead(book: Book) {
    book.read = !book.read;
    this.bookChanged.emit(book);
  }

  changeRating(rating: number, book: Book) {
    book.rating = rating;
    this.bookChanged.emit(book);
  }
}
