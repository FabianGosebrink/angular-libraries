import { NgModule } from '@angular/core';
import { LoggerService, MyLibModule } from 'my-lib';
import { environment } from '../../environments/environment';
import { CustomLoggingService } from './services/custom-logging.service';

@NgModule({
  imports: [MyLibModule.forRoot({ isProduction: environment.production })],
  providers: [
    {
      provide: LoggerService,
      useClass: CustomLoggingService
    }
  ],
  exports: []
})
export class CoreModule {}
