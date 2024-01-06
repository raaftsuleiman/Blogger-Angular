import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SetnewpasswordModule } from 'src/app/model/setnewpassword/setnewpassword.module';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  constructor(public auth:AuthService,private dialog: MatDialog,private toastr:ToastrService,
    public client:ClientService, private spiner:NgxSpinnerService)  { }


 



  formGroup = new FormGroup({
    
    newPassword: new FormControl('', [Validators.required])
    
  });

   login : SetnewpasswordModule = new SetnewpasswordModule();

   ChangePassword()
   {
     this.login.Userid=this.auth.id;
     this.login.Password = this.formGroup.controls.newPassword.value;
     this.auth.NewPassword(this.login).subscribe((result:any)=>
     {
       if(result)
       {
      this.spiner.show();
      this.toastr.success("Password Changed Successfully");
      this.spiner.hide();
      window.location.reload();
       }
     })
     
   }


  ngOnInit(): void {
  }

}
