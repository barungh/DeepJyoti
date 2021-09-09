import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QAnswersRoutingModule } from './qanswers-routing.module';
import { QanswersHomeComponent } from './qanswers-home/qanswers-home.component';


@NgModule({
  declarations: [
    QanswersHomeComponent
  ],
  imports: [
    CommonModule,
    QAnswersRoutingModule
  ]
})
export class QAnswersModule { }
