import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/Service/auth.service';
import { HomeService } from 'src/app/Service/home.service';
import { FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  value = 50;
  showLoader=false;
  constructor(private spinner: NgxSpinnerService,private router:Router,public homeService:HomeService
   , public authService :AuthService,private dialog: MatDialog
    
    ) { }

  ngOnInit(): void {
  }

   
  ResetPassword()
  {
    this.dialog.open(ResetPasswordComponent);
  }


  showMessage = false;
toggleShowMessage() {
this.showMessage = !this.showMessage;
}
GotoRegister(){
  this.router.navigate(['Step1']);
}


}