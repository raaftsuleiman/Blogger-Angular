import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  constructor( private admin:AdminService) { }

  ngOnInit(): void {
  }
  
  formGroup =new FormGroup({ // define form grpo with form controles= proparity of object record in create procedue 

//define each proparity as controler with validation 
    
    Contant:new FormControl(''),
    title:new FormControl(''),
    mtetTitle:new FormControl(''),

    image:new FormControl(''),
    slug:new FormControl(''),
    lastModification:new FormControl(''),

  })
  
  //define variables to save the value from controlers in it

  Contant:any;
  title:any;
  mtetTitle:any;
  image:any;
  slug:any;
  lastModification:any;
 


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
    this.Contant=this.formGroup.value.Contant;
    this.title=this.formGroup.value.title;
    this.mtetTitle=this.formGroup.value.mtetTitle;

    this.image=this.formGroup.value.image;

 
    this.slug=this.formGroup.value.slug;

    this.lastModification=this.formGroup.value.lastModification;
 
    // define object to convert the data type of variables to same it in postman

    const data2={
      title: this.title.toString(),
      metaTitle:this.mtetTitle.toString(),

      slug:this.slug.toString(),
      
      content:this.Contant.toString(),
      lastModification:this.lastModification.toString(),

      image: this.fileToUpload?.name.toString(),

      
    
 
    
    
    }
    //send the object to Admin Service to use post method 
    this.admin.createCategory(data2);
    window.location.reload(); //reload the page after addd post 

  }



}


