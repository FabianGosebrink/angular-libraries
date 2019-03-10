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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25zb2xlLWxvZ2dlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb25zb2xlLWxvZ2dlci8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWNvbnNvbGUtbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFFL0M7Ozs7SUFBQTtJQUlBLENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7Ozs7OztJQUhDLDhEQUErQjs7Ozs7O0lBQy9CLCtEQUFnQzs7Ozs7O0lBQ2hDLDhEQUErQjs7QUFHakM7SUFJRSxxQ0FBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7OztJQUNsRCwwQ0FBSTs7OztJQUFKLFVBQUssT0FBZTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLFVBQUssT0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFDRCwyQ0FBSzs7OztJQUFMLFVBQU0sT0FBZTtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxVQUFLLE9BQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBQ0QsMENBQUk7Ozs7SUFBSixVQUFLLE9BQWU7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxVQUFLLE9BQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQW5CRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFlBQVk7OztzQ0FEckI7Q0E2QkMsQUFwQkQsSUFvQkM7U0FqQlksMkJBQTJCOzs7Ozs7SUFDMUIsbURBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyQ29uZmlnIH0gZnJvbSAnLi9sb2dnZXIuY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TG9nZ2VyU2VydmljZSB7XG4gIGFic3RyYWN0IHdhcm4obWVzc2FnZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgZXJyb3IobWVzc2FnZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgaW5mbyhtZXNzYWdlOiBzdHJpbmcpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckNvbnNvbGVMb2dnZXJTZXJ2aWNlIGltcGxlbWVudHMgQWJzdHJhY3RMb2dnZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXJDb25maWc6IExvZ2dlckNvbmZpZykge31cbiAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2dnZXJDb25maWcuaXNQcm9kdWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihgJHt0aGlzLmxvZ2dlckNvbmZpZy5hcHBQcmVmaXh9OiAke21lc3NhZ2V9YCk7XG4gIH1cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmxvZ2dlckNvbmZpZy5hcHBQcmVmaXh9OiAke21lc3NhZ2V9YCk7XG4gIH1cbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2dnZXJDb25maWcuaXNQcm9kdWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubG9nZ2VyQ29uZmlnLmFwcFByZWZpeH06ICR7bWVzc2FnZX1gKTtcbiAgfVxufVxuIl19