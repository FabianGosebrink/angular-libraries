import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger-config';

export abstract class AbstractLoggerService {
  abstract warn(message: string);
  abstract error(message: string);
  abstract info(message: string);
}

@Injectable()
export class LoggerService implements AbstractLoggerService {
  constructor(private readonly loggingConfiguration: LoggerConfig) {}

  warn(message: string) {
    throw new Error('Method not implemented.');
  }
  error(message: string) {
    throw new Error('Method not implemented.');
  }
  info(message: string): void {
    if (!!this.loggingConfiguration.isProduction) {
      console.log(`ConsoleLoggerServiceFromLib: ${message}`);
    }
  }
}
