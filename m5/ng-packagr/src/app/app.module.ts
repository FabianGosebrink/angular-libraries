import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstModule } from 'super-toasty';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyFirstModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
