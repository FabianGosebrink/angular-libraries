import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoggerConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AbstractLoggerService {
}
class AngularConsoleLoggerService {
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
/** @nocollapse */ AngularConsoleLoggerService.ngInjectableDef = defineInjectable({ factory: function AngularConsoleLoggerService_Factory() { return new AngularConsoleLoggerService(inject(LoggerConfig)); }, token: AngularConsoleLoggerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularConsoleLoggerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularConsoleLoggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-console-logger',
                template: `
    <p>
      angular-console-logger works!
    </p>
  `
            }] }
];
/** @nocollapse */
AngularConsoleLoggerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularConsoleLoggerModule {
    /**
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: AngularConsoleLoggerModule,
            providers: [
                {
                    provide: LoggerConfig,
                    useValue: configuration,
                },
            ],
        };
    }
}
AngularConsoleLoggerModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [AngularConsoleLoggerComponent],
                exports: [AngularConsoleLoggerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbstractLoggerService, AngularConsoleLoggerService, AngularConsoleLoggerComponent, AngularConsoleLoggerModule, LoggerConfig as ɵa };

//# sourceMappingURL=fabiangosebrink-angular-console-logger.js.map