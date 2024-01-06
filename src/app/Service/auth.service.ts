import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SetnewpasswordModule } from '../model/setnewpassword/setnewpassword.module';
import { User } from '../model/user/user.module';
import { HomeService } from './home.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {





  loginresult: any = [{}];

  constructor(private spinner: NgxSpinnerService,private router:Router,public homeService:HomeService,private http:HttpClient,private toastr:ToastrService
    ) { }

  email=new FormControl('',[]); //without validation becouse i Use Name not Email in Database 
  password=new FormControl('');
  submit(){
 
    var Responce:any;//to save Token value
    
   

    var body={ // define the proparity of object as type in postman to hit Api
      username:this.email.value.toString(),
      password:this.password.value.toString()
    };


    const headerDict={ // object to convert data to json object and send it as header in post method
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={ // this request object apply in headerDict object
      headers:new HttpHeaders(headerDict)
    }
    console.log(body);
    //Api proceedure:
    //show Spinner
      this.spinner.show();
      debugger
     //Hit Api ,using Post Method [need 2 or 3 prameter ],url,body (email+password),header as requestOptions
      this.http.post('http://localhost:35850/api/Jwt',body,requestOptions).subscribe((res:any)=>{ //res is the token result (encripted),then convert the object to json object 
     // hide the spinner  
      this.spinner.hide()
      Responce=res;
      this.loginresult = res;
        const responce = {

          token:Responce.toString()}; //  define object [responce] has proparity  of [result] then   convert it as String to ignor [bad Request Status]

          localStorage.setItem('token',responce.token); // save the value of token [key:token , value = responce.token (encrypted value)]
          let data:any=jwtDecode(responce.token);// use[ npm i jwt decode]  to convert from increpted value of token in responce object  to decreption  then Get the value as object [ username: rolename]
          console.log(data.UserId);
          debugger ;
           
        

       localStorage.setItem('user',JSON.stringify({...data})); //make destructuring to object [data] then convert it to string  using [stringify] to allow save it local storage 
         if(data.role=='admin'){ //read the object data then use reserved word role to cheak rolename then navegate to correct page [admin dashbord]
           this.router.navigate(['admin/admin']);
         }
         else if(data.role=='client'){
        

           this.router.navigate(['client/home']); // nevigate to client dashboard
         }
        })
        this.spinner.hide();
        
    }
   
    username : string = ''
    id : number = 0;

   public getUserName()
    {
      
      const tokenString = localStorage.getItem('token') || 'invalid token';
     let data:any=jwtDecode(tokenString);
    debugger
     this.username =  data.unique_name;
     this.id = data.UserId;
    }

   
    VerifyEmail(email : any)
    {
    
      return this.http.get('http://localhost:35850/api/Users/CheckByEmail/'+email);

    }
  

     SendVerifyCode(user : any)
     {debugger
       return this.http.post('http://localhost:35850/api/Users/MailSetting',user[0]);
     }

      user:User =new User();
     

      NewPassword(login: any)
      {
        debugger
        return this.http.put('http://localhost:35850/api/Login/ResetPassword',login);
      }
   
   }

