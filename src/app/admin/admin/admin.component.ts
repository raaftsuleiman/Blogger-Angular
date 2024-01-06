import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService,
    public adminService:AdminService,
    private dialog:MatDialog
 ) { }

  ngOnInit(): void {
    this.CountOfUsers()
    this.CountOfPostes()
    this.CountOfComments()
    this.CountOfLikes()
  }
  LogOut()
  {    
    this.router.navigate(['Login']) // to return to home page 
    localStorage.clear() // to clear local storage [delete token]
    this.router.navigate(['Login']) // to return to home page 
    // window.location.reload;
  }
  

  //Api Hits process:
  //show spiner 
  // hit api
 //hide spiner 
  //show toastr


   //Function To Get the Count Of Users 
   CountOfUsers()
   {
    this.spiner.show();
    debugger
    this.adminService.CountOfUsers().subscribe((result:any)=>{ // save return object in result at define object [CountUsers]  in Admin service
      this.adminService.CountUsers =result;
      this.spiner.hide();
      this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      this.tostr.error('something want worring!!')
    })
    }

     //Function To Get the Count Of Posts
     CountOfPostes()
   {
      this.spiner.show();
      debugger
      this.adminService.CountOfPostes().subscribe((result:any)=>{ // save return object in result at define object [CountPosts]  in Admin service
      this.adminService.CountPosts =result;
      this.spiner.hide();
      this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      this.tostr.error('something want worring!!')
    })
    }

      //Function To Get the Count Of Comments
      CountOfComments()
   
      {
        this.spiner.show();
        debugger
        this.adminService.CountOfComments().subscribe((result:any)=>{ // save return object in result at define object [CountComments]  in Admin service
        this.adminService.CountComments =result;
        this.spiner.hide();
        this.tostr.success('Data Retrived !!!')
      },err=>{
        this.spiner.hide();
        this.tostr.error('something want worring!!')
      })
      }

         //Function To Get the Count Of Likes in Page
         CountOfLikes()
         {
          this.spiner.show();
          debugger
          this.adminService.CountOfLikes().subscribe((result:any)=>{ // save return object in result at define object [CountLikes]  in Admin service
          this.adminService.CountLikes =result;
          this.spiner.hide();
          this.tostr.success('Data Retrived !!!')
        },err=>{
          this.spiner.hide();
          this.tostr.error('something want worring!!')
        })
        }

}
