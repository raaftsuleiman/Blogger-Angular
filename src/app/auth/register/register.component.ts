import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import{ NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import { ClientService } from 'src/app/Service/client.service';
const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('passwordControl')!.value;
  const passwordConfirm = control.get('confirmPasswordControl')!.value;
  return password != passwordConfirm ? { passwordMatch: true } : null;
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router, private auth:AuthService, public client:ClientService) { }
  // use Form Group class to use each Form Controles As package ,use FormControl to use flag,validation....
 
  CreateForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    roleName:new FormControl(''),
    userid: new FormControl(''),
    confirmPasswordControl: new FormControl('', [Validators.required],

  )
  });
  // isPasswordConfirmMatch: boolean = false;

 
    
    


  LastId:any=[];


    


  ngOnInit(): void {
  this.   GetLastUser();

  }
  
      
 

 //define the proprity of object that recevied the values onec i input it in Form controls 
 username:any;
 password:any;
 roleName:any='client'
 userid:any;

  save() // Function to save data from input in form in html 
  {
    this.username=this.CreateForm.value.username;
    this.password=this.CreateForm.value.password;
    this.roleName=this.CreateForm.value.roleName="client"
    this.userid=this.CreateForm.value.userid;
    



    //convert the type of data to be the same in the postman in Login Create
    const PostManData={
      username:this.username.toString(),
      password: this.password.toString(),
      roleName:this.roleName.toString(),
      userid:parseInt(this.userid)
    



    }
 


    this.Create(PostManData);


  }




goToLogin(){
  this.router.navigate(["Login"]);
}
  //Function to Add Contact Us record 
  Create(data:any)
  {
    this.spiner.show();
  
    this.http.post('http://localhost:35850/api/Login',data).subscribe((result:any)=>{
      this.toastr.success("Step2 Done!")
      this.spiner.hide();
  
    },err=>
    {
      this.spiner.hide();
      this.toastr.error('Not Created :(')
    })}


    GetLastUser()
    {
      this.spiner.show();
  
      this.http.get('http://localhost:35850/api/Users/GetLastUser').subscribe((result:any)=>{
        // this.toastr.success("Step2 Done!")
        this.LastId=result;
        this.spiner.hide();
    
      },err=>
      {
        this.spiner.hide();
        this.toastr.error('Not Created :(')
      })}


      onchang(){
        if (this.CreateForm.controls.password.value== this.CreateForm.controls.confirmPasswordControl.value) {
        this.CreateForm.controls.confirmPasswordControl.setErrors(null);
        }
        else{
        this.CreateForm.controls.confirmPasswordControl.setErrors({
        mismatch:true});
        }}
    
}
