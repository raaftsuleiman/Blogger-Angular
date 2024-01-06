import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path:'Footer',
    component:FooterComponent
  
  },
  { 
    path:'Profile',
    component:ProfileComponent
  
  },
  { 
    path:'home',
    component:HomeComponent
  
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
