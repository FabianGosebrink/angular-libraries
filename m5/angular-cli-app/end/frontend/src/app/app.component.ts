import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Book tracker';

  navItems: any[] = [
    { name: 'Overview', route: 'books' },
    { name: 'Add new book', route: 'books/create' },
  ];
}
