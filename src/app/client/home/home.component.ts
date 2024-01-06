import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/Service/client.service';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import {CreatePostComponent} from '../create-post/create-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spiner :NgxSpinnerService,
    private toastr:ToastrService,private router:Router,
    public client:ClientService,
    private dialog: MatDialog) { }

   
  DisplayAllPost()

  { 
    this.spiner.show();
    this.client.DisplayAllPost().subscribe((res:any)=>{
    debugger
    this.client.data=res;
    this.spiner.hide();
    this.toastr.success("Retreved Successful");
    
    })
     }
 

     createPost()
     {
       this.dialog.open(CreatePostComponent)
     }
     
     
    
   
     GetData(search:any)
  {
  
  this.spiner.show();
  debugger
  this.client.SearchPost(search.target.value).subscribe((result:any)=>{ // save return objects in result at define object array in Admin service
    this.client.data =result;
    this.spiner.hide();
  
  },err=>{
    this.spiner.hide();
    
  })
  
  }

  ngOnInit(): void 
  {

    this.DisplayAllPost();
  }

}
