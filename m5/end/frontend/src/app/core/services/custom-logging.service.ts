import { Injectable } from '@angular/core';
import { AbstractLoggerService } from 'my-lib';

@Injectable()
export class CustomLoggingService implements AbstractLoggerService {
  warn(message: string) {
    console.warn('custom warn:' + message);
  }
  error(message: string) {
    console.error('custom error:' + message);
  }
  info(message: string) {
    console.log('custom info:' + message);
  }
  constructor() {}
}
