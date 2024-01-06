import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-posttable',
  templateUrl: './posttable.component.html',
  styleUrls: ['./posttable.component.css']
})
export class PosttableComponent implements OnInit {

  constructor( public adminService:AdminService,private toastr:ToastrService,private spiner:NgxSpinnerService ) { }
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

  ngOnInit(): void {
    // this.DisplaAllPost()
  }
//Function to delete the Post Card By Id 
DeleteUser()
{

  if(this.id){
    debugger
    this.adminService.DeletebyID(this.id);
    this.toastr.success('Deleted Item');

  }
  else {
    this.toastr.warning('This item cannot be deleted')
  }

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
  this.toastr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.toastr.error('something want worring!!')
})
}
}