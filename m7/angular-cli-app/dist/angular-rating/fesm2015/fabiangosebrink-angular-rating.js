import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, NgModule, Injectable, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularRatingComponent {
    constructor() {
        this.ratingChanged = new EventEmitter();
        this.rating = 0;
        this.count = 0;
        this.options = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // create an array with `count` items
        // increse every item by one
        // [1,2,3,4,...]
        this.options = Array.from({ length: this.count }, (v, k) => ++k);
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    changeRating(rating) {
        this.ratingChanged.emit(rating);
    }
}
AngularRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-rating',
                template: `
    <span class="rating-wrapper">
      <span *ngFor="let option of options">
        <span
          (click)="changeRating(option)"
          [ngClass]="{ rated: option <= rating }"
          >&#9733;</span
        >
      </span>
    </span>
  `,
                styles: [`
      .rated {
        color: orange;
      }

      .rating-wrapper {
        cursor: pointer;
      }
    `]
            }] }
];
/** @nocollapse */
AngularRatingComponent.ctorParameters = () => [];
AngularRatingComponent.propDecorators = {
    ratingChanged: [{ type: Output }],
    rating: [{ type: Input }],
    count: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularRatingModule {
}
AngularRatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AngularRatingComponent],
                exports: [AngularRatingComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularRatingService {
    constructor() { }
}
AngularRatingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularRatingService.ctorParameters = () => [];
/** @nocollapse */ AngularRatingService.ngInjectableDef = defineInjectable({ factory: function AngularRatingService_Factory() { return new AngularRatingService(); }, token: AngularRatingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularRatingModule, AngularRatingService, AngularRatingComponent as ɵa };

//# sourceMappingURL=fabiangosebrink-angular-rating.js.map