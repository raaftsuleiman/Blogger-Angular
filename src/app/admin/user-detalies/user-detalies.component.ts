import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-user-detalies',
  templateUrl: './user-detalies.component.html',
  styleUrls: ['./user-detalies.component.css']
})
export class UserDetaliesComponent implements OnInit {

@Input () id:number|undefined;
@Input () fname:string|undefined;
@Input () lastname:string|undefined;
@Input () image:string|undefined;
@Input () slug:string|undefined;
@Input () mobile:string|undefined;

@Input () email:string|undefined;
@Input () registerdAt:string|undefined;
@Input () lastLogin:string|undefined;
@Input () profileDescription:number|undefined;


@Input () logins:string|undefined;
@Input () postComments:string|undefined;
@Input () postLikes:string|undefined;
@Input () posts:number|undefined;
@Input () testimonials:string|undefined;
@Input () userReviews:number|undefined;


  constructor(public adminServis:AdminService,private spiner:NgxSpinnerService, public http:HttpClient,private toastr:ToastrService) { }

  Id:any=this.adminServis.DetaliesId;// send Id from User component to AdminService then Get It to Use it in UserDetalies Component 
  Id2=parseInt(this.Id);
  UserDetalies:any=[]

  ngOnInit(): void {
    this. GetbyID()
  }
  

  GetbyID()
    {
     this.spiner.show();
   debugger
   this.http.get('http://localhost:35850/api/Users/GetUserById/'+this.Id2).subscribe((res:any)=>{
    this.UserDetalies=res;
    this.spiner.hide();
    this.toastr.success('retrive it Sucssefuly');
    
  
  },err=>{
    this.spiner.hide();
  
  })
}
}
