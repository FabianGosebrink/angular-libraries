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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYmlhbmdvc2Vicmluay9hbmd1bGFyLXJhdGluZy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFrQ0U7UUFSVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUVFLENBQUM7Ozs7SUFFaEIseUNBQVE7OztJQUFSO1FBQ0UscUNBQXFDO1FBQ3JDLDRCQUE0QjtRQUM1QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELDZDQUFZOzs7O0lBQVosVUFBYSxNQUFjO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDJRQVVUOzZCQUVDLHVIQVFDO2lCQUVKOzs7OztnQ0FFRSxNQUFNO3lCQUVOLEtBQUs7d0JBRUwsS0FBSzs7SUFnQlIsNkJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQXJCWSxzQkFBc0I7OztJQUNqQywrQ0FBNkM7O0lBRTdDLHdDQUFvQjs7SUFFcEIsdUNBQW1COztJQUVuQix5Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFuZ3VsYXItcmF0aW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cInJhdGluZy13cmFwcGVyXCI+XG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlUmF0aW5nKG9wdGlvbilcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgcmF0ZWQ6IG9wdGlvbiA8PSByYXRpbmcgfVwiXG4gICAgICAgICAgPiYjOTczMzs8L3NwYW5cbiAgICAgICAgPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnJhdGVkIHtcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgIH1cblxuICAgICAgLnJhdGluZy13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgcmF0aW5nQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSByYXRpbmcgPSAwO1xuXG4gIEBJbnB1dCgpIGNvdW50ID0gMDtcblxuICBvcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB3aXRoIGBjb3VudGAgaXRlbXNcbiAgICAvLyBpbmNyZXNlIGV2ZXJ5IGl0ZW0gYnkgb25lXG4gICAgLy8gWzEsMiwzLDQsLi4uXVxuICAgIHRoaXMub3B0aW9ucyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY291bnQgfSwgKHYsIGspID0+ICsrayk7XG4gIH1cblxuICBjaGFuZ2VSYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcbiAgICB0aGlzLnJhdGluZ0NoYW5nZWQuZW1pdChyYXRpbmcpO1xuICB9XG59XG4iXX0=