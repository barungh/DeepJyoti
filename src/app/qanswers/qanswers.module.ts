import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QAnswersRoutingModule } from './qanswers-routing.module';
import { QanswersHomeComponent } from './qanswers-home/qanswers-home.component';
import { ChapterSixComponent } from './chapter-six/chapter-six.component';


@NgModule({
  declarations: [
    QanswersHomeComponent,
    ChapterSixComponent
  ],
  imports: [
    CommonModule,
    QAnswersRoutingModule
  ]
})
export class QAnswersModule { }
