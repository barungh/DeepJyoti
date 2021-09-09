import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QanswersHomeComponent} from "./qanswers-home/qanswers-home.component";

const routes: Routes = [
  { path: 'qanswers', component: QanswersHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QAnswersRoutingModule { }
