import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Step1Component,
    Step2Component,
    ResetPasswordComponent,
    EnterCodeComponent,
    NewpasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
