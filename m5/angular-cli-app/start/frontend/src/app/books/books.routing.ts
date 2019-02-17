import { Routes } from '@angular/router';
import { BookDetailsComponent } from './container/book-details/book-details.component';
import { BookFormComponent } from './container/book-form/book-form.component';
import { BooksOverviewComponent } from './container/books-overview/books-overview.component';

export const BooksRoutes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: BooksOverviewComponent },
  { path: 'create', component: BookFormComponent },
  { path: 'edit/:id', component: BookFormComponent },
  { path: 'details/:id', component: BookDetailsComponent }
];
