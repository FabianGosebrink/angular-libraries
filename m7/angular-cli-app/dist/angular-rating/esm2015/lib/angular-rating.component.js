/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class AngularRatingComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYmlhbmdvc2Vicmluay9hbmd1bGFyLXJhdGluZy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUEyQi9FLE1BQU0sT0FBTyxzQkFBc0I7SUFTakM7UUFSVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUVFLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLHFDQUFxQztRQUNyQyw0QkFBNEI7UUFDNUIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDt5QkFFQzs7Ozs7Ozs7S0FRQzthQUVKOzs7Ozs0QkFFRSxNQUFNO3FCQUVOLEtBQUs7b0JBRUwsS0FBSzs7OztJQUpOLCtDQUE2Qzs7SUFFN0Msd0NBQW9COztJQUVwQix1Q0FBbUI7O0lBRW5CLHlDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5ndWxhci1yYXRpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwicmF0aW5nLXdyYXBwZXJcIj5cbiAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VSYXRpbmcob3B0aW9uKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyByYXRlZDogb3B0aW9uIDw9IHJhdGluZyB9XCJcbiAgICAgICAgICA+JiM5NzMzOzwvc3BhblxuICAgICAgICA+XG4gICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAucmF0ZWQge1xuICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgfVxuXG4gICAgICAucmF0aW5nLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSByYXRpbmdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHJhdGluZyA9IDA7XG5cbiAgQElucHV0KCkgY291bnQgPSAwO1xuXG4gIG9wdGlvbnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IHdpdGggYGNvdW50YCBpdGVtc1xuICAgIC8vIGluY3Jlc2UgZXZlcnkgaXRlbSBieSBvbmVcbiAgICAvLyBbMSwyLDMsNCwuLi5dXG4gICAgdGhpcy5vcHRpb25zID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jb3VudCB9LCAodiwgaykgPT4gKytrKTtcbiAgfVxuXG4gIGNoYW5nZVJhdGluZyhyYXRpbmc6IG51bWJlcikge1xuICAgIHRoaXMucmF0aW5nQ2hhbmdlZC5lbWl0KHJhdGluZyk7XG4gIH1cbn1cbiJdfQ==