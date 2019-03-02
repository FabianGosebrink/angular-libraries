import { Injectable } from '@angular/core';
import { Book } from '@app/shared/models/book';
import { HttpBaseService } from './http-base.service';

@Injectable({ providedIn: 'root' })
export class BookService {
  private backendUrl = `https://localhost:5001/api/books`;

  constructor(private readonly httpBase: HttpBaseService) {}

  getAllReadBooks() {
    const url = `${this.backendUrl}?read=true`;
    return this.httpBase.get<Book[]>(`${url}`);
  }

  getAllUnreadBooks() {
    const url = `${this.backendUrl}?read=false`;
    return this.httpBase.get<Book[]>(`${url}`);
  }

  getSingle(bookId: number) {
    return this.httpBase.get<Book>(`${this.backendUrl}/${bookId}`);
  }

  getAllGenres() {
    return [
      { value: 'Tragedy', displayName: 'Tragedy' },
      { value: 'Tragic comedy', displayName: 'Tragic comedy' },
      { value: 'Fantasy', displayName: 'Fantasy' },
      { value: 'Mythology', displayName: 'Mythology' },
      { value: 'Adventure', displayName: 'Adventure' },
      { value: 'Mystery', displayName: 'Mystery' },
      { value: 'Science Fiction', displayName: 'Science fiction' },
      { value: 'Drama', displayName: 'Drame' },
      { value: 'Romance', displayName: 'Romance' },
      { value: 'Action / Adventure', displayName: 'Action / Adventure' },
      { value: 'Satire', displayName: 'Satire' },
      { value: 'Horror', displayName: 'Horror' },
      { value: 'Novel', displayName: 'Novel' },
    ];
  }

  update(updated: Book) {
    return this.httpBase.put<Book>(`${this.backendUrl}/${updated.id}`, updated);
  }

  add(book: Book) {
    return this.httpBase.post(this.backendUrl, book);
  }

  delete(bookId: number) {
    return this.httpBase.delete(`${this.backendUrl}/${bookId}`);
  }
}
