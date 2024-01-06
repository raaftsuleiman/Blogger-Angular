import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';
import { HomeService } from 'src/app/Service/home.service';
import { CreatepostComponent } from '../createpost/createpost.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService,
    public adminService:AdminService,
    private dialog:MatDialog
 ) { }





  ngOnInit(): void {

  this. DisplaAllPost();
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


//fubction to open dialog in new window 
opendialog()
{
  this.dialog.open(CreatepostComponent)

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
this.adminService.Search(search.target.value).subscribe((result:any)=>{ // save return objects in result at define object array in Admin service
  this.adminService.AllPostTable =result;
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})

}
}
