import { EventEmitter, OnInit } from '@angular/core';
export declare class AngularRatingComponent implements OnInit {
    ratingChanged: EventEmitter<{}>;
    rating: number;
    count: number;
    options: any[];
    constructor();
    ngOnInit(): void;
    changeRating(rating: number): void;
}
