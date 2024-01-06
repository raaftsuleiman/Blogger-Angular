import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-bbloghome',
  templateUrl: './bbloghome.component.html',
  styleUrls: ['./bbloghome.component.css']
})
export class BbloghomeComponent implements OnInit {

  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService,
 ) { }

  ngOnInit(): void {
    this.GetLastesPost()
    this.GetAllCategory()
    this.GetAllTestimoneal()
  }

  GoToBlog()
  {
    this.router.navigate(['/Blog']);


  }

  loadImage:any="data:image/jpeg;base64,";

  //Api Hits process:
  //show spiner 
  //api
 //hide spiner 
  //show toastr

  //Function to Get All Posts
  GetLastesPost()
  {
this.spiner.show();
debugger
this.homeService.GetLastesPost().subscribe((result:any)=>{ // save return objects in result at define object array in home service
  this.homeService.Allposts=result;
  console.log(result)
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})
}

//Function to Get All Category
GetAllCategory()
{
  this.spiner.show();
debugger
this.homeService.GetAllCategory().subscribe((result:any)=>{ // save return objects in result at define object array in home service
  this.homeService.AllCategory=result;
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})

}
//Function To Get All Testimoneal  Record 
GetAllTestimoneal()
{
  this.spiner.show();
  debugger
  this.homeService.GetAllTestimoneal().subscribe((result:any)=>{ // save return objects in result at define object array in home service
    this.homeService.AllTestimoneal=result;
    this.spiner.hide();
    this.tostr.success('Data Retrived !!!')
  },err=>{
    this.spiner.hide();
    this.tostr.error('something want worring!!')
  })

}

  

}