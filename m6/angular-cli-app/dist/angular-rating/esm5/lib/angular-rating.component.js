/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export { AngularRatingComponent };
if (false) {
    /** @type {?} */
    AngularRatingComponent.prototype.ratingChanged;
    /** @type {?} */
    AngularRatingComponent.prototype.rating;
    /** @type {?} */
    AngularRatingComponent.prototype.count;
    /** @type {?} */
    AngularRatingComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXRpbmcvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBa0NFO1FBUlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBDLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFFRSxDQUFDOzs7O0lBRWhCLHlDQUFROzs7SUFBUjtRQUNFLHFDQUFxQztRQUNyQyw0QkFBNEI7UUFDNUIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsTUFBYztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwyUUFVVDs2QkFFQyx1SEFRQztpQkFFSjs7Ozs7Z0NBRUUsTUFBTTt5QkFFTixLQUFLO3dCQUVMLEtBQUs7O0lBZ0JSLDZCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0FyQlksc0JBQXNCOzs7SUFDakMsK0NBQTZDOztJQUU3Qyx3Q0FBb0I7O0lBRXBCLHVDQUFtQjs7SUFFbkIseUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hbmd1bGFyLXJhdGluZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctd3JhcHBlclwiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVJhdGluZyhvcHRpb24pXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7IHJhdGVkOiBvcHRpb24gPD0gcmF0aW5nIH1cIlxuICAgICAgICAgID4mIzk3MzM7PC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5yYXRlZCB7XG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICB9XG5cbiAgICAgIC5yYXRpbmctd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHJhdGluZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgcmF0aW5nID0gMDtcblxuICBASW5wdXQoKSBjb3VudCA9IDA7XG5cbiAgb3B0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgd2l0aCBgY291bnRgIGl0ZW1zXG4gICAgLy8gaW5jcmVzZSBldmVyeSBpdGVtIGJ5IG9uZVxuICAgIC8vIFsxLDIsMyw0LC4uLl1cbiAgICB0aGlzLm9wdGlvbnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNvdW50IH0sICh2LCBrKSA9PiArK2spO1xuICB9XG5cbiAgY2hhbmdlUmF0aW5nKHJhdGluZzogbnVtYmVyKSB7XG4gICAgdGhpcy5yYXRpbmdDaGFuZ2VkLmVtaXQocmF0aW5nKTtcbiAgfVxufVxuIl19