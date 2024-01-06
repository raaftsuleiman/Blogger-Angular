import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(public client:ClientService,public auth:AuthService) { }

  @Input() id:number | undefined;
  @Input() fname: string | undefined;
  @Input() lastname: string | undefined;
  @Input() mobile: string | undefined;
  @Input() email: string | undefined;
  @Input() registerdAt: string | undefined;
  @Input() lastLogin: string | undefined;
  @Input() profileDescription: string | undefined;
  @Input() image: string | undefined;
  @Input() logins: string | undefined;
  @Input() postComments:  string | undefined;
  @Input() postLikes:  number | undefined;
  @Input() posts:  number | undefined;
  @Input() testimonials:  number | undefined;
  @Input() userReviews:  number | undefined;



  
   userID : any = this.auth.id;
    
  
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

  date : Date = new Date();

  

  datetime :string = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}T${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;

  formGroup = new FormGroup({

    fname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    image : new FormControl('', [Validators.required]),
  });

  
  savePost() {
    debugger
    const id : any = this.userID;
    const fname = this.formGroup.value.fname;
    const lastname = this.formGroup.value.lastname;
    const mobile = this.formGroup.value.mobile;
    const email = this.formGroup.value.email;
    const image   = this.formGroup.value.image;


    const data2 = {
    id: parseInt(id),
    fname: fname.toString(),
    lastname: lastname.toString(),
    mobile: mobile.toString(),
    email: email.toString(),
    image: this.fileToUpload?.name.toString()
   
    };
    this.client.UpdateUser(data2);
    window.location.reload();
  }

  //Function To upload image in post daialog
 





  ngOnInit(): void {
  }

}
