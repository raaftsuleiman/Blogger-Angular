import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {    
   
    this.router.navigate(['admin/admin']) // to return to home page 
    // window.location.reload;
  }

}
