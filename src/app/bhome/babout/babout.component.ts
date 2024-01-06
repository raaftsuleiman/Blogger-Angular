import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-babout',
  templateUrl: './babout.component.html',
  styleUrls: ['./babout.component.css']
})
export class BaboutComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router,public homeservice:HomeService) { }

  AllCategory:any=[{}]// array of (object) records in Category table as objects


  ngOnInit(): void {
this.GetAllCategory()
this.GetAllAbout()


  }

  
//Function to Get All Category
GetAllCategory()
{
  this.spiner.show();
debugger
return this.http.get('http://localhost:35850/api/Category/GetAllCategory').subscribe((result:any)=>{ // save return objects in result at define object array in home service
  this.AllCategory=result;
  this.spiner.hide();
  this.toastr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.toastr.error('something want worring!!')
})

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



}
