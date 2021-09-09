import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QanswersHomeComponent} from "./qanswers-home/qanswers-home.component";
import { ChapterSixComponent} from "./chapter-six/chapter-six.component";

const routes: Routes = [
  { path: '', component: QanswersHomeComponent },
  { path: 'qanswers4', component: QanswersHomeComponent },
  { path: 'qanswers6', component: ChapterSixComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QAnswersRoutingModule { }
