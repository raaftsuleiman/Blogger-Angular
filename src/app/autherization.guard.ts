import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutheraizationGuard implements CanActivate {
  constructor(private toastr:ToastrService,private router:Router,public auth:AuthService){}
  canActivate(
     //to genrate the guard using this command in the tirmenal ng g g nameofGuard
    // the idea of the guard is if the user has autherize of the spicefic page , it will return true [if has token ] and if not it [ does not has token ] will retuen false
    //return true --> you can go  to this route 
    //false --->you cannot go to the route //define warrning toaster
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state);
       //if the user logged in its mean the user hava a token (in the auth.services I explined it )
      //Then I will get the token from the local storge using localStorge.getItem('the name of the token which I seved ')
        const token=localStorage.getItem('token');
          //If there token It means the user will go to the page using the login not the route 
        if(token){ 
           //if there are user , then I will checked to the route of the page that the user  want to go using indexOf meathod 
        // indexOf --> search of the index of the admin 
        // اذا كان بحاول يدخل ع صفحة هاي الصفحة الباث الها فيه كلمة  admin 
            if(state.url.indexOf('admin')>=0){
                // if the path (routing of the page that the user try to go )
          //I will get the user from the local storge 

             let user:any=localStorage.getItem('user');
                       // check if there are a user 

              if(user){
             //to conver the user to object then you can find the role name 

                
                user=JSON.parse(user);
            //extract the role from the user and check if the role name is admin . it will retuen true , its mean the user can go to this page 

                if(user.role=='admin'){
                  return true;
                }
           //if not the admin user it will return false and show toastr

                else {
                  this.toastr.warning('this page for Admin');
                  return false;
                }
              
        // if there are not uer , it will retuen false 

              }
              else{
                this.toastr.warning('this page for Admin');
                return false;
              }
     //if the user not logged and try to the go to the page from the routing 

            }
          
          return true;}
        else { 
          this.toastr.warning('You Are Not Autherized');
          this.router.navigate(['']);
        return false }
  }
  
}
