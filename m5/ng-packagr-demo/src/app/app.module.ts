import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuperLibModule } from 'my-first-super-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SuperLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
