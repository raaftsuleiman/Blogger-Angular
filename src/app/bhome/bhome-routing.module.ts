import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaboutComponent } from './babout/babout.component';
import { BbloghomeComponent } from './bbloghome/bbloghome.component';
import { BcontactComponent } from './bcontact/bcontact.component';

const routes: Routes = [
  { 
    path:'ContactUs',
    component:BcontactComponent
  
  },

  { 
    path:"",
    component: BbloghomeComponent
  
  },
  
  { 
    path:'About',
    component:BaboutComponent
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BHomeRoutingModule { }












