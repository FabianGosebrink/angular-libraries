import { AbstractLoggerService } from 'angular-console-logger';

export class CustomLoggerService implements AbstractLoggerService {
  info(message: string) {
    console.log('Hello from CustomLoggerService: ' + message);
  }

  warn(message: string) {
    console.warn('Hello from CustomLoggerService: ' + message);
  }

  error(message: string) {
    console.error('Hello from CustomLoggerService: ' + message);
  }
}
