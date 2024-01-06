import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-postreporttable',
  templateUrl: './postreporttable.component.html',
  styleUrls: ['./postreporttable.component.css']
})
export class PostreporttableComponent implements OnInit {

  
 // Define the proparity of object (post Dto  record)[retived by postman] as Input and Display it in html then call the card in *ngfor in Table page 
@Input () id:number|undefined;
@Input () fname:string|undefined;
@Input () lastname:string|undefined;
@Input () image:string|undefined;
@Input () images:string|undefined;
@Input () title:string|undefined;

@Input () postContant:string|undefined;
@Input () createAt:string|undefined;
@Input () categoryTitle:string|undefined;
@Input () metaTitle:number|undefined;

constructor(private router:Router,public homeService : HomeService,
  public tostr:ToastrService,
  private spiner:NgxSpinnerService,
  public adminService:AdminService,
  private dialog:MatDialog
) { }





ngOnInit(): void {

//  this. DisplaAllPost();
}


//Api Hits process:
//show spiner 
// hit api
//hide spiner 
//show toastr

//Function to Get All Posts
DisplaAllPost()
{
this.spiner.show();
debugger
this.adminService.DisplaAllPost().subscribe((result:any)=>{ // save return objects in result at define object array in Admin service
this.adminService.AllPostTable =result;
this.spiner.hide();
this.tostr.success('Data Retrived !!!')
},err=>{
this.spiner.hide();
this.tostr.error('something want worring!!')
})
}
}