import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QAnswersRoutingModule } from './qanswers-routing.module';
import { QanswersHomeComponent } from './qanswers-home/qanswers-home.component';
import { ChapterSixComponent } from './chapter-six/chapter-six.component';
import { TheCopComponent } from './the-cop/the-cop.component';
import { ChapterFourComponent } from './chapter-four/chapter-four.component';


@NgModule({
  declarations: [
    QanswersHomeComponent,
    ChapterSixComponent,
    TheCopComponent,
    ChapterFourComponent
  ],
  imports: [
    CommonModule,
    QAnswersRoutingModule
  ]
})
export class QAnswersModule { }
