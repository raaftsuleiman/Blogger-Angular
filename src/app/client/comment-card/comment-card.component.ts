import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  
  @Input() id:number | undefined;
  @Input() postid:number | undefined;
  @Input() fname: string | undefined;
  @Input() lastName: string | undefined;
  @Input() image: string | undefined;
  @Input() content: string | undefined;
  @Input() createAt: string | undefined;
  @Input() publishedAt: string | undefined;
  @Input() lastModification: string | undefined;


  constructor(public client:ClientService) { }
   


  DisplayPostComments()
  {
     debugger
     this.client.coid=this.id;
    if(this.client.postid)
    this.client.DisplayPostComments(this.client.postid);
    
  }

  
  ngOnInit(): void 
  {
    this.DisplayPostComments();
   
  }

}
