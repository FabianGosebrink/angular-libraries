import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger.config';

export abstract class AbstractLoggerService {
  abstract warn(message: string);
  abstract error(message: string);
  abstract info(message: string);
}

@Injectable({
  providedIn: 'root',
})
export class AngularConsoleLoggerService implements AbstractLoggerService {
  constructor(private loggerConfig: LoggerConfig) {}
  warn(message: string) {
    if (this.loggerConfig.isProduction) {
      return;
    }
    console.warn(`${this.loggerConfig.appPrefix}: ${message}`);
  }
  error(message: string) {
    console.error(`${this.loggerConfig.appPrefix}: ${message}`);
  }
  info(message: string) {
    if (this.loggerConfig.isProduction) {
      return;
    }
    console.log(`${this.loggerConfig.appPrefix}: ${message}`);
  }
}
