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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXRpbmcvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkIvRSxNQUFNLE9BQU8sc0JBQXNCO0lBU2pDO1FBUlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBDLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFFRSxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDTixxQ0FBcUM7UUFDckMsNEJBQTRCO1FBQzVCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFjO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7eUJBRUM7Ozs7Ozs7O0tBUUM7YUFFSjs7Ozs7NEJBRUUsTUFBTTtxQkFFTixLQUFLO29CQUVMLEtBQUs7Ozs7SUFKTiwrQ0FBNkM7O0lBRTdDLHdDQUFvQjs7SUFFcEIsdUNBQW1COztJQUVuQix5Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFuZ3VsYXItcmF0aW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cInJhdGluZy13cmFwcGVyXCI+XG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlUmF0aW5nKG9wdGlvbilcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgcmF0ZWQ6IG9wdGlvbiA8PSByYXRpbmcgfVwiXG4gICAgICAgICAgPiYjOTczMzs8L3NwYW5cbiAgICAgICAgPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnJhdGVkIHtcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgIH1cblxuICAgICAgLnJhdGluZy13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgcmF0aW5nQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSByYXRpbmcgPSAwO1xuXG4gIEBJbnB1dCgpIGNvdW50ID0gMDtcblxuICBvcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB3aXRoIGBjb3VudGAgaXRlbXNcbiAgICAvLyBpbmNyZXNlIGV2ZXJ5IGl0ZW0gYnkgb25lXG4gICAgLy8gWzEsMiwzLDQsLi4uXVxuICAgIHRoaXMub3B0aW9ucyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY291bnQgfSwgKHYsIGspID0+ICsrayk7XG4gIH1cblxuICBjaGFuZ2VSYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcbiAgICB0aGlzLnJhdGluZ0NoYW5nZWQuZW1pdChyYXRpbmcpO1xuICB9XG59XG4iXX0=