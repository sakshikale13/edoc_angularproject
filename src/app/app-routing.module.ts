import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { WordComponent } from './word/word.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentComponent } from './document/document.component';
import { WordsComponent } from './words/words.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrintdocumentComponent } from './printdocument/printdocument.component';



const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"admin/document",component:DocumentComponent},
  {path:"admin/documents",component:DocumentsComponent},
  {path:"admin/word/:id",component:WordComponent},
  {path:"admin/words",component:WordsComponent},
  {path:"admin/employees",component:EmployeesComponent},
  {path:"admin/employee/:id",component:EmployeeComponent},
  {path:"admin/printdocument/:eid/:did",component:PrintdocumentComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
