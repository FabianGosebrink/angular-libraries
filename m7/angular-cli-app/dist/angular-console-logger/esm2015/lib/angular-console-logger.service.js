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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYmlhbmdvc2Vicmluay9hbmd1bGFyLWNvbnNvbGUtbG9nZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItY29uc29sZS1sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQUUvQyxNQUFNLE9BQWdCLHFCQUFxQjtDQUkxQzs7Ozs7OztJQUhDLDhEQUErQjs7Ozs7O0lBQy9CLCtEQUFnQzs7Ozs7O0lBQ2hDLDhEQUErQjs7QUFNakMsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7Ozs7O0lBQ2xELElBQUksQ0FBQyxPQUFlO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFDRCxLQUFLLENBQUMsT0FBZTtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUNELElBQUksQ0FBQyxPQUFlO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZRLFlBQVk7Ozs7Ozs7O0lBWVAsbURBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyQ29uZmlnIH0gZnJvbSAnLi9sb2dnZXIuY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TG9nZ2VyU2VydmljZSB7XG4gIGFic3RyYWN0IHdhcm4obWVzc2FnZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgZXJyb3IobWVzc2FnZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgaW5mbyhtZXNzYWdlOiBzdHJpbmcpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckNvbnNvbGVMb2dnZXJTZXJ2aWNlIGltcGxlbWVudHMgQWJzdHJhY3RMb2dnZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXJDb25maWc6IExvZ2dlckNvbmZpZykge31cbiAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2dnZXJDb25maWcuaXNQcm9kdWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihgJHt0aGlzLmxvZ2dlckNvbmZpZy5hcHBQcmVmaXh9OiAke21lc3NhZ2V9YCk7XG4gIH1cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmxvZ2dlckNvbmZpZy5hcHBQcmVmaXh9OiAke21lc3NhZ2V9YCk7XG4gIH1cbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2dnZXJDb25maWcuaXNQcm9kdWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubG9nZ2VyQ29uZmlnLmFwcFByZWZpeH06ICR7bWVzc2FnZX1gKTtcbiAgfVxufVxuIl19