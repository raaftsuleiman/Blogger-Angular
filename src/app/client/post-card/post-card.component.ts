import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/Service/client.service';
import { CommentCardComponent } from '../comment-card/comment-card.component';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { HomeComponent } from '../home/home.component';
import { MyCommentCardComponent } from '../my-comment-card/my-comment-card.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
 

  
  constructor(private toastr: ToastrService,private http: HttpClient,private home:HomeComponent,public client:ClientService, private dialog: MatDialog,private spiner:NgxSpinnerService) { }
  
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
 


 date : Date = new Date();
  
  

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


  NewImage:any;
  getImagePath() {

    debugger

    this.spiner.show();

    this.http.get('http://localhost:35850/api/Post/getimage/'+this.image).subscribe(
      (result) => {
       this.NewImage=result
        // this.toastr.success(' Done');
        // this.spiner.hide();
      },
      (err) => {
        this.spiner.hide();
        this.toastr.error(' Faild!');
      }
    );
  }

  ngOnInit(): void 
  {
    
  }
    
}
