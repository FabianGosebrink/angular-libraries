(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-first', ['exports', '@angular/core'], factory) :
    (factory((global['my-first'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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

    exports.MyFirstComponent = MyFirstComponent;
    exports.MyFirstModule = MyFirstModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-first.umd.js.map