import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import{HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';

// For MDB Angular Pro
import { ChartsModule, ChartSimpleModule, WavesModule } from 'ng-uikit-pro-standard'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, // use it to import validation 
    ReactiveFormsModule ,//use it to import validation
    MatButtonModule, // use to import Buttom from Angular Material 
    NgxSpinnerModule,
    HttpClientModule // use it to hits Api using Http Methode (get,post,delete,put...)
 
    ,MatFormFieldModule,
 
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,

    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    ChartsModule,ChartSimpleModule, WavesModule// use it to apply Chart in Admin dashboard

  ],
  exports:[  // make all define imported module as export to use it in all modules that import the shared module 
    FormsModule,
    
    NgxSpinnerModule,
    MatFormFieldModule,
     ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  
    HttpClientModule,
    MatDialogModule,
    ChartsModule,ChartSimpleModule, WavesModule// use it to apply Chart in Admin dashboard

  ]})
export class SharedModule { }




