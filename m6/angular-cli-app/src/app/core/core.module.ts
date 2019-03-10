import { NgModule } from '@angular/core';
import {
  AngularConsoleLoggerModule,
  AngularConsoleLoggerService,
} from 'angular-console-logger';
import { CustomLoggerService } from './services/custom-logger.service';

@NgModule({
  imports: [
    AngularConsoleLoggerModule.forRoot({
      isProduction: false,
      appPrefix: 'pluralsight-app',
    }),
  ],
  providers: [
    { provide: AngularConsoleLoggerService, useClass: CustomLoggerService },
  ],
})
export class CoreModule {}
