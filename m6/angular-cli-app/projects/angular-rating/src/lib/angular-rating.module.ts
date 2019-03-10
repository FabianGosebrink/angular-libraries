import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularRatingComponent } from './angular-rating.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AngularRatingComponent],
  exports: [AngularRatingComponent],
})
export class AngularRatingModule {}
