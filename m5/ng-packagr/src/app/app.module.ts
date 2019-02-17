import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstModule } from 'my-first';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyFirstModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
