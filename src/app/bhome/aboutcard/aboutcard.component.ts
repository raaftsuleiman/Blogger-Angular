import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-aboutcard',
  templateUrl: './aboutcard.component.html',
  styleUrls: ['./aboutcard.component.css']
})
export class AboutcardComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router,public homservice:HomeService) { }

  AllCategory:any=[{}]// array of (object) records in Category table as objects
  AllAboutUs:any=[{}]
// Define the proparity of object (About Us record)[retived by postman] as Input and Display it in html then call the card in *ngfor in AboutUs page 
@Input () id:number|undefined;
@Input () description:string|undefined;
@Input () webSiteInfos:string|undefined;
@Input () image:string|undefined;
 
  ngOnInit(): void {



  }

}
