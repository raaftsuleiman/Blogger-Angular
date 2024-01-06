import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  AllAboutUs : any =[{}] // array of(object)  records in about us table as objects 
  AllTestimoneal : any =[{}] // array of (object) records in Testimoneal table as objects 
  Allposts: any []=[] // array of (object) records in Post table as objects
  AllCategory:any=[{}]// array of (object) records in Category table as objects
 
  LastPost:any=[{}]
  
  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  //show spiner
  //hits api
  //hide spiner
  //show toastr

//Function To Get All About Us Record 
GetAllAboutUs()
{
  return this.http.get('http://localhost:35850/api/AboutUs/GetAllAbout') // use link from postman then Go to about us t.s
}

GetLastesPost()
{
  return this.http.get('http://localhost:35850/api/Post/GetTop5') // use link from postman then Go to about us t.s

}
//Function To Get All Testimoneal  Record 
GetAllTestimoneal()
{
  return this.http.get('http://localhost:35850/api/Testimoneal') // use link from postman  then Go to home-page t.s
}

//Function To Create New Contact Message
CreateContactUs(data:any)
{
  return this.http.post('http://localhost:35850/api/ConactUs',data)
}
//Function To Get All Posts
GetAllPosts()
{
return this.http.get('http://localhost:35850/api/Post/GetAllPost')
}
//Function to Get All Category
GetAllCategory()
{
  return this.http.get('http://localhost:35850/api/Category/GetAllCategory')
}

//Function to Add Contact Us record 
Create(data:any)
{
  this.spiner.show();
  debugger
  this.http.post('http://localhost:35850/api/ConactUs',data).subscribe((result:any)=>{
    this.toastr.success("Course Created!")
    this.spiner.hide();

  },err=>
  {
    this.spiner.hide();
    this.toastr.error('Not Created :(')
  })
}



  data :any =[{}]
  //show spiner
  //hits api
  //hide spiner
  //show toastr





DeletebyID(id:number){
this.spiner.show();
debugger
this.http.delete('http://localhost:35850/api/Testimoneal/delete/'+id).subscribe((date:any)=>{
  this.spiner.hide();
  this.toastr.success('Deleted ');
  

},err=>{
  this.spiner.hide();

})


  }

  GetTestimonealById(id:number)
  {
    this.spiner.show();
 debugger
 this.http.get('http://localhost:35850/api/Testimoneal/GetTestimonialbyId/'+id).subscribe((res:any)=>{
  this.AllTestimoneal=res;
  this.spiner.hide();
  this.toastr.success('retrive it Sucssefuly ');
  

},err=>{
  this.spiner.hide();

})}

//Function To Create Testimonial in Daialog
createTestimoneal(data:any){
  this.spiner.show();
  debugger
  this.http.post('http://localhost:35850/api/Testimoneal/',data).subscribe((res:any)=>{
    this.toastr.success('Created');
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('error.state');

  })

}

  
DeleteAbout(id:number)
{
  this.spiner.show();
debugger
this.http.delete('http://localhost:35850/api/AboutUs/delete/'+id).subscribe((date:any)=>{
  this.spiner.hide();
  this.toastr.success('Deleted ');
  

},err=>{
  this.spiner.hide();

})
}
UpdateAbout(data: any) {
    
  this.spiner.show();

  this.http.put('http://localhost:35850/api/AboutUs',data).subscribe(
    (res) => {
      this.toastr.success('Updated');
      this.spiner.hide();
    },
    (err) => {
      this.spiner.hide();
      this.toastr.error('UpdateFaild!');
    }
  );

  
}
display_image:any// proparity to save image 
uploadAttachment(file:FormData){
  //debugger
  const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  }
  const requestOptions = {
  headers: new HttpHeaders(headerDict),
  };
  this.http.post('http://localhost:35850/api/Post/upload/',file).subscribe((data: any) => {
  this.display_image=data.image;
  debugger
  if(data){
  console.log(data);
  console.log(this.display_image=data.image);
}
  }, err => {
 
  })
  }



}



