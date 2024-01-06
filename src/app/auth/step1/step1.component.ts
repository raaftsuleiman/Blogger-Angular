import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) { }


  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigate(["Login"]);
  }
  goTostep1()
    {
      this.router.navigate(["Step2"]);


    }
  
}
