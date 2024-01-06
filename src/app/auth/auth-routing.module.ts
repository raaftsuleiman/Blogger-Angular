import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Step1Component } from './step1/step1.component';

const routes: Routes = [
  {
    path:"", // defult component 
    component:LoginComponent
  },
  {
    path:"Register",
    component:RegisterComponent
  },
  {
    path:"Step1",
    component:Step1Component
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
