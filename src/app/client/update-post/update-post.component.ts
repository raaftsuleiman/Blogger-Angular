import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';



@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  constructor(public client:ClientService,public auth:AuthService) { }





  fileToUpload:File | undefined
  uploadFile(files:any) {
    if (files.length === 0) {
    return;
    }
     this.fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    this.client.uploadAttachment(formData);
  }

  
   userID : any = this.auth.id;
    
  
   
  

  DisplayAllPostUser()

   
 {
   if(this.userID)
   debugger

   this.client.DisplayAllPostUsers(this.userID).subscribe((res:any)=>
   {
   this.client.displayAllPostUser=res;

   });
  }
 

  date : Date = new Date();

  

  datetime :string = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}T${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;

  formGroup = new FormGroup({

    title: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    postContant: new FormControl('', [Validators.required]),
    categoreId: new FormControl('', [Validators.required]),

  });

  
  savePost() {
    debugger
    const id : any = this.client.postid;
    const title = this.formGroup.value.title;
    const image = this.formGroup.value.image;
    const postContant = this.formGroup.value.postContant;
    const published :any = 1;
    const createAt   = this.datetime;
    const categoreId = this.formGroup.value.categoreId;
    const userid = this.userID;

    const data2 = {
    id: parseInt(id),
    title: title.toString(),
    image: this.fileToUpload?.name.toString(),
    published: parseInt(published),
    postContant: postContant.toString(),
    createAt: createAt.toString(),
    categoreId:  parseInt(categoreId),
    userid:  parseInt(userid)
    };
    this.client.UpdatePost(data2);
    window.location.reload();
  }

  //Function To upload image in post daialog
 





  ngOnInit(): void {
  }
  
  
 

}
