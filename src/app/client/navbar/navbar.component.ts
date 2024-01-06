import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userid :number | undefined;
   
  constructor(public client:ClientService,public auth:AuthService,private router:Router,private spinner :NgxSpinnerService) { }
   


  
  // GoToHome()
  // {
    
  //   this.spinner.show();
  //   this.router.navigate(['client/home']);
  //   this.spinner.hide();
  // }


 
  
  ngOnInit(): void
   {
     this.auth.getUserName();
   }

   LogOut()
   {
     localStorage.clear() // to clear local storage [delete token]
     this.router.navigate(['']) // to return to home page 
     
   }
}
