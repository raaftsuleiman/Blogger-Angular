import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {
  constructor( public adminService:AdminService,private toastr:ToastrService,private spiner:NgxSpinnerService ) { }
  // Define the proparity of object (post Dto  record)[retived by postman] as Input and Display it in html then call the card in *ngfor in Table page 
 @Input () id:number|undefined;

 @Input () title:string|undefined;
 @Input () metaTitle:number|undefined;
 @Input () slug:string|undefined;

 @Input () Contant:string|undefined;
 @Input () LastModification:string|undefined;
 @Input () image:string|undefined;


  ngOnInit(): void {
  }

  //Function to delete the Testimoneal Card By Id 
Delete()
{

  if(this.id){
    debugger
    
    this.adminService.DeletebyCatID(this.id);
    this.toastr.success('Deleted Item');

  }
  else {
    this.toastr.warning('This item cannot be deleted')
  }

}

}
