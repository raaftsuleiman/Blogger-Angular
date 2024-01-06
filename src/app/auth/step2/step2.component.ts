import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  // use Form Group class to use each Form Controles As package ,use FormControl to use flag,validation....
 

    CreateForm: FormGroup = new FormGroup({
      fname:new FormControl(''),
      lastname: new FormControl(''),
      mobile:new FormControl(''),
      email: new FormControl(''),
      registerdAt:new FormControl(''),
      lastLogin: new FormControl(''),
      profileDescription: new FormControl(''),
      image:new FormControl(''),
  
      })


  ngOnInit(): void {
  

  }
      
 

 //define the proprity of object that recevied the values onec i input it in Form controls 

 fname:any;
 lastname:any;
 mobile:any;
 email:any;
 registerdAt:any="2020-01-01T00:00:00"
 lastLogin:any="2020-01-01T00:00:00"
 profileDescription:any=""
 image:any=""

 


  save()
  {    this.fname=this.CreateForm.value.fname;
    this.lastname=this.CreateForm.value.lastname;
    this.mobile=this.CreateForm.value.mobile;
    this.email=this.CreateForm.value.email;
    this.registerdAt=this.CreateForm.value.registerdAt="2020-01-01T00:00:00";
    this.lastLogin=this.CreateForm.value.lastLogin="2020-01-01T00:00:00";
    this.profileDescription=this.CreateForm.value.profileDescription="";
    this.image=this.CreateForm.value.image="";

           //convert the type of data to be the same in the postman in User Create

           const PostManDataUser={
            fname:this.fname.toString(),
            lastname: this.lastname.toString(),
            mobile:this.mobile.toString(),
            email:this.email.toString(),
            registerdAt: this.registerdAt.toString(),
            lastLogin:this.lastLogin.toString(),
            profileDescription: this.profileDescription.toString(),
            image:this.image.toString(),
      
      
          }
              this.Create(PostManDataUser);


  }
  //Function to Add Contact Us record 
Create(data:any)
{
  this.spiner.show();

  this.http.post('http://localhost:35850/api/Users',data).subscribe((result:any)=>{
    this.toastr.success("Seep1 done!")
    this.spiner.hide();
    this.router.navigate(['Register']);

  },err=>
  {
    this.spiner.hide();
    this.toastr.error('Not Created :(')
  })
}



 






}
