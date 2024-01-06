import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user/user.module';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';
import { EnterCodeComponent } from '../enter-code/enter-code.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public auth:AuthService,private dialog: MatDialog,private toastr:ToastrService,private router:Router,
    public client:ClientService, private spiner:NgxSpinnerService) { }


  userID : any = this.auth.id;



  formGroup = new FormGroup({
    
    email: new FormControl('', [Validators.required])
    
  });
  
    
    
    user : any
    
    EnterCode()
    {
      this.auth.VerifyEmail(this.formGroup.controls.email.value).subscribe((result : any)=>
      {
        debugger
        this.user = result
        this.auth.id=this.user[0].id
        this.auth.SendVerifyCode(this.user).subscribe((res:any)=>
        
        {debugger
          this.auth.user = res;
          this.dialog.open(EnterCodeComponent);
        })

        }  )
     
    }

 


  ngOnInit(): void {
  }

}
