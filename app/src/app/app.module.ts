import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import { DemarreComponent } from './demarre/demarre.component';
import { AdminComponent } from './admin/admin.component';
import {ListPartiesComponent} from './list-parties/list-parties.component';
import { Partie11Component } from './partie11/partie11.component'


@NgModule({
  declarations: [
    AppComponent,
    Partie1Component,
    DemarreComponent,
    AdminComponent,
    ListPartiesComponent,
    Partie11Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'partie1', component: Partie1Component},
      {path: '',component: DemarreComponent},
      {path: 'admin', component: AdminComponent},
      {path:'listParties',component: ListPartiesComponent},
      {path: 'partie11',component: Partie11Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
