import { LoggerConfig } from './logger.config';
export declare abstract class AbstractLoggerService {
    abstract warn(message: string): any;
    abstract error(message: string): any;
    abstract info(message: string): any;
}
export declare class AngularConsoleLoggerService implements AbstractLoggerService {
    private loggerConfig;
    constructor(loggerConfig: LoggerConfig);
    warn(message: string): void;
    error(message: string): void;
    info(message: string): void;
}
