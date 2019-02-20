import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuperLibComponent } from './super-lib.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SuperLibComponent],
  exports: [SuperLibComponent],
})
export class SuperLibModule {}
