import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QAnswersModule } from "./qanswers/qanswers.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageModule } from "./landing-page/landing-page.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    QAnswersModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
