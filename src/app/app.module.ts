import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QAnswersModule } from "./qanswers/qanswers.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    QAnswersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
