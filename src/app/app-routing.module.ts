import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Step1Component } from './auth/step1/step1.component';
import { Step2Component } from './auth/step2/step2.component';
import { AutheraizationGuard } from './autherization.guard';
import { BaboutComponent } from './bhome/babout/babout.component';

import { BbloghomeComponent } from './bhome/bbloghome/bbloghome.component';
import { BcontactComponent } from './bhome/bcontact/bcontact.component';
import { BHomeModule } from './bhome/bhome.module';
import { ClientModule } from './client/client.module';
import { FooterComponent } from './client/footer/footer.component';




const routes: Routes = 
[
//  { path:'ContactUs',
//   component:BcontactComponent
// },


//   { 
//     path:'',
//     component: BbloghomeComponent
  
//   },
  
//   { 
//     path:'About',
//     component:BaboutComponent
  
//   },
  
  
  { 
    path:'Login',
    component:LoginComponent
  
  },
  { 
    path:'Register',
    component:RegisterComponent
  
  },
  {
    path:"Step1",
    component:Step1Component
  },
  {
    path:"Step2",
    component:Step2Component
  },




  { path:'admin',
  loadChildren:()=>AdminModule ,//load admin module after start => http../admin /component in admin module
  canActivate :[AutheraizationGuard]
  },
  { path:'client',
  loadChildren:()=>ClientModule ,//load admin module after start => http../admin /component in admin module
  canActivate :[AutheraizationGuard]
  },
  { path:'',
  loadChildren:()=>BHomeModule //load as defult module 
    
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
