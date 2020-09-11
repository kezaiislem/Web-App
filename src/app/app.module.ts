import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SubmittedComponent } from './submitted/submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    NotfoundComponent,
    SubmittedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'survey/:id',
        component: SurveyComponent
      },
      {
        path: 'submitted',
        component: SubmittedComponent
      },
      {
        path: 'error',
        component: NotfoundComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
