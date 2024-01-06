import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-post-may-like',
  templateUrl: './post-may-like.component.html',
  styleUrls: ['./post-may-like.component.css']
})
export class PostMayLikeComponent implements OnInit {

  constructor(public client:ClientService,private dialog: MatDialog,public auth :AuthService) { }

  @Input() id:number | undefined;
  @Input() fname: string | undefined;
  @Input() lastname: string | undefined;
  @Input() image: string | undefined;
  @Input() images: string | undefined;
  @Input() title: string | undefined;
  @Input() postContant: string | undefined;
  @Input() createAt: string | undefined;
  @Input() slug: string | undefined;
  @Input() metaTitle: string | undefined;
  @Input() likes:  number | undefined;
  @Input() comments:  number | undefined;

  userID : any = this.auth.id;
  
  DisplayPostUserLiked()
  {
    if(this.userID)
    this.client.DisplayPostUserLiked(this.userID);
  }
   
  ngOnInit(): void 
  {
      this.DisplayPostUserLiked();
  }

}
