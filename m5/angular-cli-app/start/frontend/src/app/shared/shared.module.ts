import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule],
})
export class SharedModule {}
