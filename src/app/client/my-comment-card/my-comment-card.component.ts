import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';
import { UpdateCommentComponent } from '../update-comment/update-comment.component';

@Component({
  selector: 'app-my-comment-card',
  templateUrl: './my-comment-card.component.html',
  styleUrls: ['./my-comment-card.component.css']
})
export class MyCommentCardComponent implements OnInit {

  constructor( public client:ClientService , public auth:AuthService , private dialog: MatDialog) { }


  @Input() id:number | undefined;
  @Input() createAt: string | undefined;
  @Input() isPublished: number | undefined;
  @Input() publishedAt: string | undefined;
  @Input() content: string | undefined;
  @Input() lastModification: string | undefined;
  @Input() postid: number | undefined;
  @Input() userid: number | undefined;
  @Input() post: string | undefined;
  @Input() user: string | undefined;


  userID : number = this.auth.id;
  
  
  
  GetCommentUser()
  {
    
     
    if(this.userID,this.client.postid)
    this.client.GetCommentUser(this.userID,this.client.postid);
  }
   
  DeleteComment()
  {
    debugger
   
    if(this.userID,this.client.postid)
   
    this.client.DeleteComment(this.userID,this.client.postid);

    window.location.reload();
  }

EditComment()
{  
  

   this.dialog.open(UpdateCommentComponent);
}

  ngOnInit(): void
   {
     this.GetCommentUser();
  }

}
