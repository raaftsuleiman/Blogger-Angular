import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {


  constructor( private admin:AdminService) { }

  ngOnInit(): void {
  }
  
  formGroup =new FormGroup({ // define form grpo with form controles= proparity of object record in create procedue 

//define each proparity as controler with validation 
    
    userid:new FormControl(''),
    categoreId:new FormControl(''),
    postContant:new FormControl(''),
    title:new FormControl(''),
    createAt:new FormControl(''),
    updateAt:new FormControl(''),
    published:new FormControl(''),
    image:new FormControl(''),
    slug:new FormControl(''),
    lastModification:new FormControl(''),

  })
  
  //define variables to save the value from controlers in it
  userid:any;
  categoreId:any;
  postContant:any;
  title:any;
  createAt:any;
  published:any;
  image:any;
  slug:any;
  updateAt:any;
  lastModification:any;
 
  loadImage:any ="data:image/jpeg;base64,";
  getImagePath(value:string ){

    let basePath="../../../../assets/images/UploadedFile/";
    // this.image=basePath+value;
    return basePath+value;
    
    }
//Function To upload image in post daialog
  // uploadFile(files:any) {

  //   if (files.length === 0) {
  //   return;
  //   }
  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);
  //   this.admin.uploadAttachment(formData);
    
  //   }
  fileToUpload:File | undefined
  uploadFile(files:any) {
    if (files.length === 0) {
    return;
    }
     this.fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    this.admin.uploadAttachment(formData);
   
   
    }


   //function save to assign the value of variables
  saveItem(){
    debugger
    this.categoreId=this.formGroup.value.categoreId;
    this.postContant=this.formGroup.value.postContant;
    this.title=this.formGroup.value.title;
    this.createAt=this.formGroup.value.createAt;

    this.published=this.formGroup.value.published;
    this.image=this.formGroup.value.image;

 
    this.slug=this.formGroup.value.slug;
    this.userid=this.formGroup.value.userid;
    this.updateAt=this.formGroup.value.updateAtz;
    this.lastModification=this.formGroup.value.lastModification;
 
    // define object to convert the data type of variables to same it in postman

    const data2={
      
      slug:this.slug.toString(),
      title: this.title.toString(),
      image: this.fileToUpload?.name.toString(),
      published:parseInt(this.published),
      createAt:this.createAt.toString(),
      updateAt: this.updateAt.toString(),
      postContant:this.postContant.toString(),
      lastModification:this.lastModification.toString(),
      categoreId:parseInt(this.categoreId),
    
      userid:parseInt(this.userid),
 
      
    
 
    
    
    }
    //send the object to Admin Service to use post method 
    this.admin.create(data2);
    window.location.reload(); //reload the page after addd post 

  }



}




