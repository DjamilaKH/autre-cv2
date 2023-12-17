import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { CvDetailsComponent } from './components/cv-details/cv-details.component';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { FormcvComponent } from './components/formcv/formcv.component';
import { EditerCvComponent } from './editer-cv/editer-cv.component';

const routes: Routes = [
  { path: '', redirectTo: 'cvs', pathMatch: 'full' },
  { path: 'cvs', component: CvListComponent },
  { path: 'cv/:id', component: CvDetailsComponent },
  { path: 'add', component: AddCvComponent },
  { path: 'formcv', component: FormcvComponent },
  { path: 'edit-cv/:id', component: EditerCvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
