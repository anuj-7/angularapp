import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstBoxComponent } from './first-box/first-box.component';
import { SecondBoxComponent } from './second-box/second-box.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstBoxComponent,
    SecondBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
