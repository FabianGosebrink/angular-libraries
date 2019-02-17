import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyFirstComponent = /** @class */ (function () {
    function MyFirstComponent() {
    }
    /**
     * @return {?}
     */
    MyFirstComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    MyFirstComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-first',
                    template: "<p>my first works</p>",
                    styles: ['p {  color: green; font-size: 20px;} ']
                }] }
    ];
    /** @nocollapse */
    MyFirstComponent.ctorParameters = function () { return []; };
    return MyFirstComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyFirstModule = /** @class */ (function () {
    function MyFirstModule() {
    }
    MyFirstModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [MyFirstComponent],
                    declarations: [MyFirstComponent],
                    providers: [],
                },] }
    ];
    return MyFirstModule;
}());

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