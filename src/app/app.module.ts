import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

// For MDB Angular Pro
import { ChartsModule, ChartSimpleModule, WavesModule } from 'ng-uikit-pro-standard';




@NgModule({
  declarations: [
    AppComponent,
 
   

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    SharedModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  
    ToastNoAnimationModule.forRoot(),

  ],
  providers: [],

  bootstrap: [AppComponent],

})
export class AppModule { }
