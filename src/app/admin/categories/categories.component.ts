import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router,public homeservice:HomeService, public dialog:MatDialog) { }



  ngOnInit(): void {
    this.GetAllcatigory();

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
  GetAllcatigory()
  {
this.spiner.show();
debugger
this.homeservice.GetAllCategory().subscribe((result:any)=>{ // save return objects in result at define object array in home service
  this.homeservice.AllCategory=result;
  this.spiner.hide();
  this.toastr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.toastr.error('something want worring!!')
})
}




opendialog()
{
  this.dialog.open(CreatecategoryComponent)
}
}