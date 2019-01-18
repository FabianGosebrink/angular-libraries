import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../core/services/book.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  form: FormGroup;
  genres = [];

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router,
    private readonly notificationService: NotificationService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.genres = this.bookService.getAllGenres();

    this.form = this.createFormGroup();

    if (this.paramIsGiven('id')) {
      this.patchFormWithBook();
    }
  }

  addOrUpdateBook() {
    if (!!this.form.value.id) {
      this.bookService
        .update(this.form.value)
        .subscribe(() => this.notificationService.show('Book updated'));
    } else {
      this.bookService
        .add(this.form.value)
        .subscribe(() => this.notificationService.show('Book added'));
    }
  }

  private paramIsGiven(param: string) {
    return !!this.activatedRoute.snapshot.params[param];
  }

  private createFormGroup() {
    return new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      genre: new FormControl(''),
    });
  }

  private patchFormWithBook() {
    const bookId = +this.activatedRoute.snapshot.params.id;
    this.bookService
      .getSingle(bookId)
      .subscribe(book => this.form.patchValue(book));
  }
}
