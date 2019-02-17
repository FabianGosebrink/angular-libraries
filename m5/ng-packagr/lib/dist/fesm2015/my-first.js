import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyFirstComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
MyFirstComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-first',
                template: "<p>my first works</p>",
                styles: ['p {  color: green; font-size: 20px;} ']
            }] }
];
/** @nocollapse */
MyFirstComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyFirstModule {
}
MyFirstModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [MyFirstComponent],
                declarations: [MyFirstComponent],
                providers: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MyFirstComponent, MyFirstModule };

//# sourceMappingURL=my-first.js.map