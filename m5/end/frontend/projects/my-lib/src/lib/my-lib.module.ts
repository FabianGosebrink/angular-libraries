import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerConfig } from './logger-config';
import { LoggerService } from './my-lib.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class MyLibModule {
  public static forRoot(configuration: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: MyLibModule,
      providers: [
        { provide: LoggerConfig, useValue: configuration },
        LoggerService,
      ],
    };
  }
}
