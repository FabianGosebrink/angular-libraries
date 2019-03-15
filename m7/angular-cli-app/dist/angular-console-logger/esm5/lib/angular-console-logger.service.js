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
var /**
 * @abstract
 */
AbstractLoggerService = /** @class */ (function () {
    function AbstractLoggerService() {
    }
    return AbstractLoggerService;
}());
/**
 * @abstract
 */
export { AbstractLoggerService };
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
var AngularConsoleLoggerService = /** @class */ (function () {
    function AngularConsoleLoggerService(loggerConfig) {
        this.loggerConfig = loggerConfig;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    AngularConsoleLoggerService.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (this.loggerConfig.isProduction) {
            return;
        }
        console.warn(this.loggerConfig.appPrefix + ": " + message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    AngularConsoleLoggerService.prototype.error = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.error(this.loggerConfig.appPrefix + ": " + message);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    AngularConsoleLoggerService.prototype.info = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (this.loggerConfig.isProduction) {
            return;
        }
        console.log(this.loggerConfig.appPrefix + ": " + message);
    };
    AngularConsoleLoggerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AngularConsoleLoggerService.ctorParameters = function () { return [
        { type: LoggerConfig }
    ]; };
    /** @nocollapse */ AngularConsoleLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function AngularConsoleLoggerService_Factory() { return new AngularConsoleLoggerService(i0.inject(i1.LoggerConfig)); }, token: AngularConsoleLoggerService, providedIn: "root" });
    return AngularConsoleLoggerService;
}());
export { AngularConsoleLoggerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularConsoleLoggerService.prototype.loggerConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYmlhbmdvc2Vicmluay9hbmd1bGFyLWNvbnNvbGUtbG9nZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItY29uc29sZS1sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQUUvQzs7OztJQUFBO0lBSUEsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7Ozs7O0lBSEMsOERBQStCOzs7Ozs7SUFDL0IsK0RBQWdDOzs7Ozs7SUFDaEMsOERBQStCOztBQUdqQztJQUlFLHFDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7Ozs7O0lBQ2xELDBDQUFJOzs7O0lBQUosVUFBSyxPQUFlO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsVUFBSyxPQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUNELDJDQUFLOzs7O0lBQUwsVUFBTSxPQUFlO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLFVBQUssT0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFDRCwwQ0FBSTs7OztJQUFKLFVBQUssT0FBZTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLFVBQUssT0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsWUFBWTs7O3NDQURyQjtDQTZCQyxBQXBCRCxJQW9CQztTQWpCWSwyQkFBMkI7Ozs7OztJQUMxQixtREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXJDb25maWcgfSBmcm9tICcuL2xvZ2dlci5jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RMb2dnZXJTZXJ2aWNlIHtcbiAgYWJzdHJhY3Qgd2FybihtZXNzYWdlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBlcnJvcihtZXNzYWdlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBpbmZvKG1lc3NhZ2U6IHN0cmluZyk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ29uc29sZUxvZ2dlclNlcnZpY2UgaW1wbGVtZW50cyBBYnN0cmFjdExvZ2dlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlckNvbmZpZzogTG9nZ2VyQ29uZmlnKSB7fVxuICB3YXJuKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmxvZ2dlckNvbmZpZy5pc1Byb2R1Y3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKGAke3RoaXMubG9nZ2VyQ29uZmlnLmFwcFByZWZpeH06ICR7bWVzc2FnZX1gKTtcbiAgfVxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubG9nZ2VyQ29uZmlnLmFwcFByZWZpeH06ICR7bWVzc2FnZX1gKTtcbiAgfVxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmxvZ2dlckNvbmZpZy5pc1Byb2R1Y3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2dnZXJDb25maWcuYXBwUHJlZml4fTogJHttZXNzYWdlfWApO1xuICB9XG59XG4iXX0=