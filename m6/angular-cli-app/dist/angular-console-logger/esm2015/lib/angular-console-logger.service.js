/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger.config';
import * as i0 from "@angular/core";
import * as i1 from "./logger.config";
/**
 * @abstract
 */
export class AbstractLoggerService {
}
if (false) {
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    AbstractLoggerService.prototype.warn = function (message) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    AbstractLoggerService.prototype.error = function (message) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    AbstractLoggerService.prototype.info = function (message) { };
}
export class AngularConsoleLoggerService {
    /**
     * @param {?} loggerConfig
     */
    constructor(loggerConfig) {
        this.loggerConfig = loggerConfig;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    warn(message) {
        if (this.loggerConfig.isProduction) {
            return;
        }
        console.warn(`${this.loggerConfig.appPrefix}: ${message}`);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    error(message) {
        console.error(`${this.loggerConfig.appPrefix}: ${message}`);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    info(message) {
        if (this.loggerConfig.isProduction) {
            return;
        }
        console.log(`${this.loggerConfig.appPrefix}: ${message}`);
    }
}
AngularConsoleLoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AngularConsoleLoggerService.ctorParameters = () => [
    { type: LoggerConfig }
];
/** @nocollapse */ AngularConsoleLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function AngularConsoleLoggerService_Factory() { return new AngularConsoleLoggerService(i0.inject(i1.LoggerConfig)); }, token: AngularConsoleLoggerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularConsoleLoggerService.prototype.loggerConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb25zb2xlLWxvZ2dlci8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWNvbnNvbGUtbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFFL0MsTUFBTSxPQUFnQixxQkFBcUI7Q0FJMUM7Ozs7Ozs7SUFIQyw4REFBK0I7Ozs7OztJQUMvQiwrREFBZ0M7Ozs7OztJQUNoQyw4REFBK0I7O0FBTWpDLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFDdEMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7OztJQUNsRCxJQUFJLENBQUMsT0FBZTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBQ0QsS0FBSyxDQUFDLE9BQWU7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFDRCxJQUFJLENBQUMsT0FBZTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQW5CRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxZQUFZOzs7Ozs7OztJQVlQLG1EQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlckNvbmZpZyB9IGZyb20gJy4vbG9nZ2VyLmNvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdExvZ2dlclNlcnZpY2Uge1xuICBhYnN0cmFjdCB3YXJuKG1lc3NhZ2U6IHN0cmluZyk7XG4gIGFic3RyYWN0IGVycm9yKG1lc3NhZ2U6IHN0cmluZyk7XG4gIGFic3RyYWN0IGluZm8obWVzc2FnZTogc3RyaW5nKTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDb25zb2xlTG9nZ2VyU2VydmljZSBpbXBsZW1lbnRzIEFic3RyYWN0TG9nZ2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyQ29uZmlnOiBMb2dnZXJDb25maWcpIHt9XG4gIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMubG9nZ2VyQ29uZmlnLmlzUHJvZHVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oYCR7dGhpcy5sb2dnZXJDb25maWcuYXBwUHJlZml4fTogJHttZXNzYWdlfWApO1xuICB9XG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5sb2dnZXJDb25maWcuYXBwUHJlZml4fTogJHttZXNzYWdlfWApO1xuICB9XG4gIGluZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMubG9nZ2VyQ29uZmlnLmlzUHJvZHVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvZ2dlckNvbmZpZy5hcHBQcmVmaXh9OiAke21lc3NhZ2V9YCk7XG4gIH1cbn1cbiJdfQ==