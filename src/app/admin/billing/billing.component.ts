import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor( public adminService:AdminService, private spiner: NgxSpinnerService, private tostr:ToastrService, private router:Router) { }
  AllUser:any=[{}] 
  ngOnInit(): void {

    this.DisplaAllUsers()

  }

   //Api Hits process:
  //show spiner 
  // hit api
 //hide spiner 
  //show toastr

  //Function to Get All Users
  DisplaAllUsers()
  {
this.spiner.show();
debugger
this.adminService.DisplaAllUsers().subscribe((result:any)=>{ // save return objects in result at define object array in Admin service
  this.adminService.AllUsers =result;
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})
}
LogOut()
{    
  this.router.navigate(['Login']) // to return to home page 
  localStorage.clear() // to clear local storage [delete token]
  this.router.navigate(['Login']) // to return to home page 
  // window.location.reload;
}

// Function to search User by its name 
GetData(search:any)
{

this.spiner.show();
debugger
this.adminService.SearchUser(search.target.value).subscribe((result:any)=>{ // save return objects in result at define object array in Admin service
  this.adminService.AllUsers =result;
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})

}



}
