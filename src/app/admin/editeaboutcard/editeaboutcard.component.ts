import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-editeaboutcard',
  templateUrl: './editeaboutcard.component.html',
  styleUrls: ['./editeaboutcard.component.css']
})
export class EditeaboutcardComponent implements OnInit {
    // Define the proparity of object (About Us record)[retived by postman] as Input and Display it in html then call the card in *ngfor in AboutUs page 
    @Input () id:number|undefined;
    @Input () description:string|undefined;
    @Input () webSiteInfos:string|undefined;
    @Input () image:string|undefined;

  constructor( public admin:AdminService, public dialog:MatDialog) { }

  
  formGroup = new FormGroup({

    // id: new FormControl(''),

    image: new FormControl(''),
    description: new FormControl('', [Validators.required]),

  })




  
  savePost() {
    debugger
 

   const  Id= this.admin.AboutId;
  const  Description = this.formGroup.value.description;
  const Image = this.formGroup.value.image;


   

    const data2 = {
    id: parseInt(Id),
    description: Description.toString(),
    image: Image.toString(),
 
    };
    this.admin.UpdateAbout(data2);
    window.location.reload();
    debugger;
  }

  //Function To upload image in post daialog
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


    

  ngOnInit(): void {
  }

}
