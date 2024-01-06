import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Service/auth.service';
import { NewpasswordComponent } from '../newpassword/newpassword.component';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent implements OnInit {

  constructor(public auth:AuthService,private dialog: MatDialog) { }


  userID : any = this.auth.id;

  
  

  formGroup = new FormGroup({
    
    code: new FormControl('', [Validators.required])
    
  });

   NewPassword()
   {
     
     this.dialog.open(NewpasswordComponent);
   }

    

  ngOnInit(): void {
  }

}
