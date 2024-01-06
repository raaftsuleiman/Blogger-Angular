import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';
import { HomeService } from 'src/app/Service/home.service';
import { EditeaboutcardComponent } from '../editeaboutcard/editeaboutcard.component';

@Component({
  selector: 'app-aboutcard',
  templateUrl: './aboutcard.component.html',
  styleUrls: ['./aboutcard.component.css']
})
export class AboutcardComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router,public homeservice:HomeService, public dialog:MatDialog,private Admin:AdminService) { }
  // Define the proparity of object (About Us record)[retived by postman] as Input and Display it in html then call the card in *ngfor in AboutUs page 
  @Input () id:number|undefined;
  @Input () description:string|undefined;
  @Input () webSiteInfos:string|undefined;
  @Input () image:string|undefined;
  ngOnInit(): void {
  }

  //Function to delete the Testimoneal Card By Id 
  DeleteAbout()
{

  if(this.id){
    debugger
    
    this.homeservice.DeleteAbout(this.id);
    this.toastr.success('Deleted Item');

  }
  else {
    this.toastr.warning('This item cannot be deleted')
  }

}
opendialog()
{
  this.Admin.AboutId=this.id;
  this.dialog.open(EditeaboutcardComponent)

}
}
