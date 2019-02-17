import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,

    CoreModule,

    RouterModule.forRoot(AppRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
