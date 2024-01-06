import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BHomeRoutingModule } from './bhome-routing.module';
import { BaboutComponent } from './babout/babout.component';

import { BcontactComponent } from './bcontact/bcontact.component';
import { BbloghomeComponent } from './bbloghome/bbloghome.component';
import { PostcardComponent } from './postcard/postcard.component';
import { CategoriesimageComponent } from './categoriesimage/categoriesimage.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialcardComponent } from './testimonialcard/testimonialcard.component';
import { AboutcardComponent } from './aboutcard/aboutcard.component';
import { BreacklineComponent } from './breackline/breackline.component';
import { Breackline2Component } from './breackline2/breackline2.component';
import { Breackline3Component } from './breackline3/breackline3.component';
import { BookComponent } from './book/book.component';
import { CfigureComponent } from './cfigure/cfigure.component';
import { TbottunComponent } from './tbottun/tbottun.component';
import { TestimonialdaialogComponent } from './testimonialdaialog/testimonialdaialog.component';


@NgModule({
  declarations: [
    BaboutComponent,
  
    BcontactComponent,
    BbloghomeComponent,
    PostcardComponent,
    CategoriesimageComponent,
    TestimonialcardComponent,
    AboutcardComponent,
    BreacklineComponent,
    Breackline2Component,
    Breackline3Component,
    BookComponent,
    CfigureComponent,
    TbottunComponent,
    TestimonialdaialogComponent
  ],
  imports: [
    CommonModule,
    BHomeRoutingModule,
    SharedModule  ]
})
export class BHomeModule { }
