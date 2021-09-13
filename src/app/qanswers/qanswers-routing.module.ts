import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QanswersHomeComponent} from "./qanswers-home/qanswers-home.component";
import { ChapterSixComponent} from "./chapter-six/chapter-six.component";
import { ChapterFourComponent } from './chapter-four/chapter-four.component';


const routes: Routes = [
  { 
    path: '', 
    component: QanswersHomeComponent,
    children: [
      { path: 'qanswers6', component: ChapterSixComponent },
      { path: 'qanswers4', component: ChapterFourComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QAnswersRoutingModule { }
