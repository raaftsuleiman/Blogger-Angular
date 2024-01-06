import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';
import { CreateaboutComponent } from '../createabout/createabout.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router,public homeservice:HomeService, public dialog:MatDialog) { }



  ngOnInit(): void {
    this.GetAllAbout();
  }
 

  LogOut()
{    
  this.router.navigate(['Login']) // to return to home page 
  localStorage.clear() // to clear local storage [delete token]
  this.router.navigate(['Login']) // to return to home page 
  // window.location.reload;
}


//Api process:
//show spiner
//Hit Api [in home Service]
//hide spinner
//show toaster

  //Function to Get All Posts
  GetAllAbout()
  {
this.spiner.show();
debugger
this.homeservice.GetAllAboutUs().subscribe((result:any)=>{ // save return objects in result at define object array in home service
  this.homeservice.AllAboutUs=result;
  this.spiner.hide();
  this.toastr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.toastr.error('something want worring!!')
})
}




opendialog()
{
  this.dialog.open(CreateaboutComponent)
}
}