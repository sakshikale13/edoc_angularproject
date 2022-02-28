import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ApiService } from './api.service';
import { CookieService } from './cookie.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { WordsComponent } from './words/words.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DocumentComponent } from './document/document.component';
import { DocumentsComponent } from './documents/documents.component';
import { WordComponent } from './word/word.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrintdocumentComponent } from './printdocument/printdocument.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    WordComponent,
    TopbarComponent,
    DocumentComponent,
    DocumentsComponent,
    WordsComponent,
    EmployeeComponent,
    EmployeesComponent,
    PrintdocumentComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
