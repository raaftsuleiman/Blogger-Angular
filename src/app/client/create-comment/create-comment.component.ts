import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';


@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor( public client:ClientService , public auth:AuthService) { }

  userID : any = this.auth.id;

  date : Date = new Date();

 
  datetime :string = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}T${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;

  formGroup = new FormGroup({
    
    content: new FormControl('', [Validators.required])
    
  });

  SaveComment() {
    debugger
    const createAt = this.datetime;
    const isPublished :any = 1;
    const content = this.formGroup.value.content;
    const postid = this.client.postid;
    const userid = this.userID;
    debugger
    const data3 = {
     
   
      createAt: createAt.toString(),
      isPublished: parseInt(isPublished),
      content: content.toString(),
      postid: parseInt(postid),
      userid:  parseInt(userid)
    };
    this.client.CreateComment(data3);
    window.location.reload();
  }


  ngOnInit(): void 
  {

  }
  
  
}
