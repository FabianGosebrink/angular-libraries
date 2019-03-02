import { TestBed } from '@angular/core/testing';

import { AngularConsoleLoggerService } from './angular-console-logger.service';

describe('AngularConsoleLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularConsoleLoggerService = TestBed.get(AngularConsoleLoggerService);
    expect(service).toBeTruthy();
  });
});
