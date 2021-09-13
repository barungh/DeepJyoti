import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';

import { NotFoundComponent } from './not-found/not-found.component'



const routes: Routes = [
  { path: 'qanswers', loadChildren: () => import('./qanswers/qanswers.module')
    .then(m => m.QAnswersModule)
  },
  { path: '', component: WelcomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
