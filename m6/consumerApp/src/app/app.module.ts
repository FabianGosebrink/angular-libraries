import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularConsoleLoggerModule } from 'angular-console-logger';
import { AngularRatingModule } from 'angular-rating';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularConsoleLoggerModule.forRoot({
      appPrefix: 'consumerApp',
      isProduction: environment.production,
    }),
    AngularRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
