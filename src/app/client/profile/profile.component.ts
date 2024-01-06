import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';
import { CreatePostComponent } from '../create-post/create-post.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public client:ClientService, private dialog: MatDialog,private spinner:NgxSpinnerService,public auth:AuthService) {

   }



   
   @Input() id:number | undefined;
   @Input() fname: string | undefined;
   @Input() lastname: string | undefined;
   @Input() mobile: string | undefined;
   @Input() email: string | undefined;
   @Input() registerdAt: string | undefined;
   @Input() lastLogin: string | undefined;
   @Input() profileDescription: string | undefined;
   @Input() image: string | undefined;
   @Input() logins: string | undefined;
   @Input() postComments: string | undefined;
   @Input() postLikes: string | undefined;
   @Input() posts: string | undefined;
   @Input() testimonials: string | undefined;
   @Input() userReviews: string | undefined;
 

   
    userID : any = this.auth.id;
     
   
    
   

   DisplayAllPostUser()
 
    
  {
    if(this.userID)
    debugger
    this.spinner.show();
    this.client.DisplayAllPostUsers(this.userID).subscribe((res:any)=>{
    this.client.displayAllPostUser=res;
    this.spinner.hide();
    
    
    });
     }

     
     deletePost()
     {
       
      
        if(this.id)
       
        this.client.deletePost(this.id);
 
      
     }
     

     GetData(search:any)
     {
     
     this.spinner.show();
     debugger
     this.client.SearchPost(search.target.value).subscribe((result:any)=>{ // save return objects in result at define object array in Admin service
       this.client.displayAllPostUser =result;
       this.spinner.hide();
     
     },err=>{
       this.spinner.hide();
       
     })
     
     }
     

         GetUserById()
         {
           debugger
           if(this.userID)
           this.client.GetUserById(this.userID);
           
         }


   createPost()
   {
     this.dialog.open(CreatePostComponent);
   }

   
   EditProfile()
   {
     this.dialog.open(UpdateProfileComponent);
   }
   

  ngOnInit(): void 
  {
    this.DisplayAllPostUser();
    this.GetUserById();
  }

}
