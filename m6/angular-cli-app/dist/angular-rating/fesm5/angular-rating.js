import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, NgModule, Injectable, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularRatingComponent = /** @class */ (function () {
    function AngularRatingComponent() {
        this.ratingChanged = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'lib-angular-rating',
                    template: "\n    <span class=\"rating-wrapper\">\n      <span *ngFor=\"let option of options\">\n        <span\n          (click)=\"changeRating(option)\"\n          [ngClass]=\"{ rated: option <= rating }\"\n          >&#9733;</span\n        >\n      </span>\n    </span>\n  ",
                    styles: ["\n      .rated {\n        color: orange;\n      }\n\n      .rating-wrapper {\n        cursor: pointer;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    AngularRatingComponent.ctorParameters = function () { return []; };
    AngularRatingComponent.propDecorators = {
        ratingChanged: [{ type: Output }],
        rating: [{ type: Input }],
        count: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularRatingService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularRatingService.ngInjectableDef = defineInjectable({ factory: function AngularRatingService_Factory() { return new AngularRatingService(); }, token: AngularRatingService, providedIn: "root" });
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

export { AngularRatingModule, AngularRatingService, AngularRatingComponent as ɵa };

//# sourceMappingURL=angular-rating.js.map