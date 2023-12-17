import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { CvDetailsComponent } from './components/cv-details/cv-details.component';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormcvComponent } from './components/formcv/formcv.component';
import { EditerCvComponent } from './editer-cv/editer-cv.component';
@NgModule({
  declarations: [
    AppComponent,
    AddCvComponent,
    CvDetailsComponent,
    CvListComponent,
    FormcvComponent,
    EditerCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
