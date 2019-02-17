import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

const materialModules: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatPaginatorModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
