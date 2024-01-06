import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { TableComponent } from './table/table.component';
import { BillingComponent } from './billing/billing.component';
import { PosttableComponent } from './posttable/posttable.component';
import { TagesComponent } from './Testimonials/tages.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UserDetaliesComponent } from './user-detalies/user-detalies.component';
import { ChartComponent } from './chart/chart.component';
import { PdfComponent } from './pdf/pdf.component';
import { ReportsComponent } from './reports/reports.component';
import { PdfpostComponent } from './pdfpost/pdfpost.component';
import { PostreportComponent } from './postreport/postreport.component';
import { PostreporttableComponent } from './postreporttable/postreporttable.component';
import { Report2Component } from './report2/report2.component';
import { TestimonealComponent } from './testimoneal/testimoneal.component';
import { Step1Component } from './step1/step1.component';
import { InformationComponent } from './information/information.component';
import { AboutcardComponent } from './aboutcard/aboutcard.component';
import { EditeaboutcardComponent } from './editeaboutcard/editeaboutcard.component';
import { CreateaboutComponent } from './createabout/createabout.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';



@NgModule({
  declarations: [
    AdminComponent,
    TableComponent,
    BillingComponent,
    PosttableComponent,
    TagesComponent,
    CreatepostComponent,
    UserComponent,
    UserDetaliesComponent,
    ChartComponent,
    PdfComponent,
    ReportsComponent,
    PdfpostComponent,
    PostreportComponent,
    PostreporttableComponent,
    Report2Component,
    TestimonealComponent,
    Step1Component,
    InformationComponent,
    AboutcardComponent,
    EditeaboutcardComponent,
    CreateaboutComponent,
    CategoriesComponent,
    CreatecategoryComponent,
    DisplayCategoryComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { 




}
