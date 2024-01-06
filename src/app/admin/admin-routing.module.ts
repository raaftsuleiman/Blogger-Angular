import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BillingComponent } from './billing/billing.component';
import { CategoriesComponent } from './categories/categories.component';
import { InformationComponent } from './information/information.component';
import { PostreportComponent } from './postreport/postreport.component';
import { Report2Component } from './report2/report2.component';
import { ReportsComponent } from './reports/reports.component';
import { TableComponent } from './table/table.component';
import { TagesComponent } from './Testimonials/tages.component';

const routes: Routes = [
  {
    path:'admin',  // http..../admin/admin
    component:AdminComponent
  },
  {
    path:'Table',  // http..../admin/Table
    component:TableComponent
  },
  {
    path:'Billing',  // http..../admin/Billing
    component:BillingComponent
  },
  {
    path:'Report',  // http..../admin/Report
    component:ReportsComponent
  },
  {
    path:'PReport',  // http..../admin/PostReport
    component:PostreportComponent
  },
  {
    path:'PostReport',  // http..../admin/PostReport
    component:Report2Component
  },
  {
    path:'tag',  // http..../admin/PostReport
    component:TagesComponent
  },
  {
    path:'inforimation',  // http..../admin/PostReport
    component:InformationComponent
  },
  {
    path:'category',  // http..../admin/PostReport
    component:CategoriesComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
