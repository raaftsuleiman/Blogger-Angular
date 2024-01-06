import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit {

  constructor(public client:ClientService,public auth:AuthService) { }

  @Input() id:number | undefined;
  @Input() userid:number | undefined;
  @Input() postid:number | undefined;
 




  userID : any = this.auth.id;

  date : Date = new Date();
  datetime :string = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}T${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;

  formGroup = new FormGroup({

    content: new FormControl('', [Validators.required]),
   
  });

  
  savePost() {
    debugger
  
    
    const content = this.formGroup.value.content;
    const postid:any = this.client.postid;
    const userid = this.userID;

    const data2 = {
  
 
    content: content.toString(),
    userid:  parseInt(userid),
    postid:  parseInt(postid)
    };
    this.client.UpdateComment(data2);
    window.location.reload();
  }

  DeleteComment()
  {

  }
  ngOnInit(): void {
  }

}
