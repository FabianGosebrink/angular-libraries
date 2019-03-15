import { Component } from '@angular/core';
import { AngularConsoleLoggerService } from '@fabiangosebrink/angular-console-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'consumerApp';

  selectedRating = 5;

  constructor(private logger: AngularConsoleLoggerService) {}

  ratingChanged(rating: number) {
    this.selectedRating = rating;
    this.logger.info(`${rating} was selected`);
  }
}
