import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SuperLibComponent = /** @class */ (function () {
    function SuperLibComponent() {
    }
    SuperLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'super-lib-component',
                    template: "<p>\r\n  Hello from an external template\r\n</p>\r\n"
                }] }
    ];
    return SuperLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [SuperLibComponent],
                    exports: [SuperLibComponent],
                },] }
    ];
    return SuperLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SuperLibComponent, SuperLibModule };

//# sourceMappingURL=my-first-super-lib.js.map