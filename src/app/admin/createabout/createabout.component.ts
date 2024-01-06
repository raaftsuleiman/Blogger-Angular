import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-createabout',
  templateUrl: './createabout.component.html',
  styleUrls: ['./createabout.component.css']
})
export class CreateaboutComponent implements OnInit {
   // Define the proparity of object (About Us record)[retived by postman] as Input and Display it in html then call the card in *ngfor in AboutUs page 

   constructor( private admin:AdminService) { }

   ngOnInit(): void {
   }
   
   formGroup =new FormGroup({ // define form grpo with form controles= proparity of object record in create procedue 
 
 //define each proparity as controler with validation 
  
     image:new FormControl(''),
     description:new FormControl(''),

    

 
   })
   
   //define variables to save the value from controlers in it

   description:any;
   image:any;

 
  
 
 
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

     this.description=this.formGroup.value.description;
  
     this.image=this.formGroup.value.image;
 
  
  
     // define object to convert the data type of variables to same it in postman
 
     const data2={
       

       description: this.description.toString(),
       image: this.fileToUpload?.name.toString(),
     
  
       
     
  
     
     
     }
     //send the object to Admin Service to use post method 
     this.admin.createAbout(data2);
     window.location.reload(); //reload the page after addd post 
 
   }
 
  }