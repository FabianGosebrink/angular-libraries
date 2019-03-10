import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoggerConfig = /** @class */ (function () {
    function LoggerConfig() {
    }
    return LoggerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
AbstractLoggerService = /** @class */ (function () {
    function AbstractLoggerService() {
    }
    return AbstractLoggerService;
}());
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
    /** @nocollapse */ AngularConsoleLoggerService.ngInjectableDef = defineInjectable({ factory: function AngularConsoleLoggerService_Factory() { return new AngularConsoleLoggerService(inject(LoggerConfig)); }, token: AngularConsoleLoggerService, providedIn: "root" });
    return AngularConsoleLoggerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularConsoleLoggerComponent = /** @class */ (function () {
    function AngularConsoleLoggerComponent() {
    }
    /**
     * @return {?}
     */
    AngularConsoleLoggerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AngularConsoleLoggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-angular-console-logger',
                    template: "\n    <p>\n      angular-console-logger works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    AngularConsoleLoggerComponent.ctorParameters = function () { return []; };
    return AngularConsoleLoggerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularConsoleLoggerModule = /** @class */ (function () {
    function AngularConsoleLoggerModule() {
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    AngularConsoleLoggerModule.forRoot = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return {
            ngModule: AngularConsoleLoggerModule,
            providers: [
                {
                    provide: LoggerConfig,
                    useValue: configuration,
                },
            ],
        };
    };
    AngularConsoleLoggerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [AngularConsoleLoggerComponent],
                    exports: [AngularConsoleLoggerComponent],
                },] }
    ];
    return AngularConsoleLoggerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbstractLoggerService, AngularConsoleLoggerService, AngularConsoleLoggerComponent, AngularConsoleLoggerModule, LoggerConfig as ɵa };

//# sourceMappingURL=angular-console-logger.js.map