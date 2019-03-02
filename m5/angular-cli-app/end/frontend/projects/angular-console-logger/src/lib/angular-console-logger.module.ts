import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularConsoleLoggerComponent } from './angular-console-logger.component';
import { LoggerConfig } from './logger.config';

@NgModule({
  imports: [],
  declarations: [AngularConsoleLoggerComponent],
  exports: [AngularConsoleLoggerComponent],
})
export class AngularConsoleLoggerModule {
  public static forRoot(configuration: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: AngularConsoleLoggerModule,
      providers: [
        {
          provide: LoggerConfig,
          useValue: configuration,
        },
      ],
    };
  }
}
