import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-testimonialcard',
  templateUrl: './testimonialcard.component.html',
  styleUrls: ['./testimonialcard.component.css']
})
export class TestimonialcardComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router, private homeService:HomeService) { }

    // Define the proparity of object (post record)[retived by postman] as Input and Display it in html then call the card in *ngfor in home page 
    @Input () id:number|undefined;
    @Input () feedBack:string|undefined;
    @Input () userId:number|undefined;
    @Input () user:string|undefined;
   
  ngOnInit(): void {
  }

  GetById()
  {
    // this.GetTestimonealById()
  }

  //Function to delete the Testimoneal Card By Id 
  Delete()
  {

    if(this.id){
      debugger
      this.homeService.DeletebyID(this.id);
      this.toastr.success('Deleted Item');

    }
    else {
      this.toastr.warning('This item cannot be deleted')
    }

}
  


GetTestimonealById()
{
  if(this.id){
    debugger
    this.homeService.GetTestimonealById(this.id);
    this.toastr.success('Get Item');

  }
  else {
    this.toastr.warning('This item cannot be Get')


}
}
}
