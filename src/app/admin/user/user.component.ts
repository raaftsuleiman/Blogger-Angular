import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserDetaliesComponent } from '../user-detalies/user-detalies.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public adminService:AdminService, private toastr:ToastrService, public dialog:MatDialog, private router:Router) { }
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



  ngOnInit(): void {
  }


//Function to delete the User Card By Id 
Delete()
{ 
  if(this.id){
    debugger
    this.adminService.DeleteUserbyID(this.id);
    this.toastr.success('Deleted Item');

  }
  else {
    this.toastr.warning('This item cannot be deleted')
  }}

  //Functio to open dialoag and get User Detalies
  opendialoag()
  {
    if(this.id){
      debugger
     this.adminService.openDetalies(this.id,this.email,this.profileDescription,this.mobile);
      // this.dialog.open(UserDetaliesComponent)
    
      

  }




}
LogOut()
{    
  this.router.navigate(['Login']) // to return to home page 
  localStorage.clear() // to clear local storage [delete token]
  this.router.navigate(['Login']) // to return to home page 
  // window.location.reload;
}



}
