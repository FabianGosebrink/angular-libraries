(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-first-super-lib', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['my-first-super-lib'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SuperLibComponent = /** @class */ (function () {
        function SuperLibComponent() {
        }
        SuperLibComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.SuperLibComponent = SuperLibComponent;
    exports.SuperLibModule = SuperLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-first-super-lib.umd.js.map