import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';

import { __values } from 'tslib';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(public client:ClientService,public auth:AuthService) { }

  loadImage:any ="data:image/jpeg;base64,";
  getImagePath(value:string ){

    let basePath="../../../../assets/images/UploadedFile/";
    // this.image=basePath+value;
    return basePath+value;
    
    }
 
 displayFn(subject: any)
 {
   return subject? subject.name : undefined
 }

  ngOnInit(): void {
                        }
  
  userID : any = this.auth.id;

  date : Date = new Date();

 
  datetime :string = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}T${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;

  formGroup = new FormGroup({
    
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    postContant: new FormControl('', [Validators.required]),
    categoreId: new FormControl('', [Validators.required]),
   
    
  });


  
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


  savePost() {
    
    const title = this.formGroup.value.title;
    const image = this.formGroup.value.image;
    const postContant = this.formGroup.value.postContant;
    const published :any = 1;
    const createAt   = this.datetime;
    const categoreId = this.formGroup.value.categoreId;
    const userid = this.userID;

    const data2 = {
     
   
    title: title.toString(),
    image : this.fileToUpload?.name.toString(),
    published: parseInt(published),
    postContant: postContant.toString(),
    createAt: createAt.toString(),
    categoreId:  parseInt(categoreId),
    userid:  parseInt(userid)
    };
    this.client.createPost(data2);
    window.location.reload();
  }

  //Function To upload image in post daialog


}
