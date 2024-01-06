import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/Service/client.service';
import { CommentCardComponent } from '../comment-card/comment-card.component';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { MyCommentCardComponent } from '../my-comment-card/my-comment-card.component';
import { ProfileComponent } from '../profile/profile.component';
import { UpdatePostComponent } from '../update-post/update-post.component';

@Component({
  selector: 'app-post-card-profile',
  templateUrl: './post-card-profile.component.html',
  styleUrls: ['./post-card-profile.component.css']
})
export class PostCardProfileComponent implements OnInit {



  @Input() id:number | undefined ;
  @Input() fname: string | undefined;
  @Input() lastname: string | undefined;
  @Input() image: string | undefined;
  @Input() images: string | undefined;
  @Input() title: string | undefined;
  @Input() postContant: string | undefined;
  @Input() createAt: string | undefined;
  @Input() slug: string | undefined;
  @Input() metaTitle: string | undefined;
  
  constructor( private dialog: MatDialog, public client:ClientService) { }


   

  deletePost()
  {
     
   
      if(this.id)
    
      this.client.deletePost(this.id);
      window.location.reload();
  }
  
  updatepost()
  {
     this.client.postid =this.id;
     debugger
    this.dialog.open(UpdatePostComponent);
  }

  CreateComment()
  {
    debugger
    this.client.postid=this.id;
    this.dialog.open(CreateCommentComponent);
  }

  DisplayComments()
  {
   
    this.client.postid=this.id;
    debugger
    this.dialog.open(CommentCardComponent);
  }

  MyComment()
  {
    
    debugger
    this.dialog.open(MyCommentCardComponent);
  }
  ngOnInit(): void 
  {
    
  }

}
