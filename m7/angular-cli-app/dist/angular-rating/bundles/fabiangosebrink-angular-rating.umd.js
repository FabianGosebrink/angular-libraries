(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fabiangosebrink/angular-rating', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global.fabiangosebrink = global.fabiangosebrink || {}, global.fabiangosebrink['angular-rating'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularRatingComponent = /** @class */ (function () {
        function AngularRatingComponent() {
            this.ratingChanged = new i0.EventEmitter();
            this.rating = 0;
            this.count = 0;
            this.options = [];
        }
        /**
         * @return {?}
         */
        AngularRatingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // create an array with `count` items
                // increse every item by one
                // [1,2,3,4,...]
                this.options = Array.from({ length: this.count }, function (v, k) { return ++k; });
            };
        /**
         * @param {?} rating
         * @return {?}
         */
        AngularRatingComponent.prototype.changeRating = /**
         * @param {?} rating
         * @return {?}
         */
            function (rating) {
                this.ratingChanged.emit(rating);
            };
        AngularRatingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-angular-rating',
                        template: "\n    <span class=\"rating-wrapper\">\n      <span *ngFor=\"let option of options\">\n        <span\n          (click)=\"changeRating(option)\"\n          [ngClass]=\"{ rated: option <= rating }\"\n          >&#9733;</span\n        >\n      </span>\n    </span>\n  ",
                        styles: ["\n      .rated {\n        color: orange;\n      }\n\n      .rating-wrapper {\n        cursor: pointer;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        AngularRatingComponent.ctorParameters = function () { return []; };
        AngularRatingComponent.propDecorators = {
            ratingChanged: [{ type: i0.Output }],
            rating: [{ type: i0.Input }],
            count: [{ type: i0.Input }]
        };
        return AngularRatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularRatingModule = /** @class */ (function () {
        function AngularRatingModule() {
        }
        AngularRatingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [AngularRatingComponent],
                        exports: [AngularRatingComponent],
                    },] }
        ];
        return AngularRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularRatingService = /** @class */ (function () {
        function AngularRatingService() {
        }
        AngularRatingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularRatingService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularRatingService.ngInjectableDef = i0.defineInjectable({ factory: function AngularRatingService_Factory() { return new AngularRatingService(); }, token: AngularRatingService, providedIn: "root" });
        return AngularRatingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AngularRatingModule = AngularRatingModule;
    exports.AngularRatingService = AngularRatingService;
    exports.ɵa = AngularRatingComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=fabiangosebrink-angular-rating.umd.js.map