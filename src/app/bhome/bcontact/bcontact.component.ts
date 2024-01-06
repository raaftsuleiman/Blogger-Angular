import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bcontact',
  templateUrl: './bcontact.component.html',
  styleUrls: ['./bcontact.component.css']
})
export class BcontactComponent implements OnInit {


  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  // use Form Group class to use each Form Controles As package ,use FormControl to use flag,validation....
 
  CreateForm: FormGroup = new FormGroup({
    facebook: new FormControl('', [Validators.required]),
    twitter: new FormControl('', [Validators.required]),
    text: new FormControl(''),
    contactMobile: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    
    })
    AllCategory:any=[{}]// array of (object) records in Category table as objects


  ngOnInit(): void {
    this.GetAllCategory()

  }
      
 

 //define the proprity of object that recevied the values onec i input it in Form controls 
 facebook:any;
 text:any;
  twitter:any;
  contactMobile:any;
  image:any;
  save() // Function to save data from input in form in html 
  {
    this.facebook=this.CreateForm.value.facebook;
    this.text=this.CreateForm.value.text;
    this.twitter=this.CreateForm.value.twitter;
    this.image=this.CreateForm.value.image;
    this.contactMobile=this.CreateForm.value.contactMobile;


    //convert the type of data to be the same in the postman 
    const PostManData={
      facebook:this.facebook.toString(),
      text: this.text.toString(),
      twitter:this.twitter.toString(),
      image:this.image.toString(),
      contactMobile:this.contactMobile.toString()



    }
  
    this.Create(PostManData);


  }
  //Function to Add Contact Us record 
Create(data:any)
{
  this.spiner.show();

  this.http.post('http://localhost:35850/api/ConactUs',data).subscribe((result:any)=>{
    this.toastr.success("Message Send!")
    this.spiner.hide();

  },err=>
  {
    this.spiner.hide();
    this.toastr.error('Not Created :(')
  })
}

//Function to Get All Category
GetAllCategory()
{
  this.spiner.show();
debugger
return this.http.get('http://localhost:35850/api/Category/GetAllCategory').subscribe((result:any)=>{ // save return objects in result at define object array in home service
  this.AllCategory=result;
  this.spiner.hide();
  this.toastr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.toastr.error('something want worring!!')
})

}

  
}
