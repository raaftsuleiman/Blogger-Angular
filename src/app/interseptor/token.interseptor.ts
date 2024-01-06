import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
//name of class = name of file.ts // by this code the authorization apply for all token in code 
export class TokenInterseptor implements HttpInterceptor{ //HttpInterceptor in Angular metrial is interface help me by (next side ) to complete the api process after intersection to do Authoriazation 
    //interceptor --> create folder in the app module , inside this folder , create a file for the interceptor 
//هاد بفيدني اني اعدل ع الداتا اللي رح يبعثها اليوزر  
// using this Interceptor to edit the request from the user and add the Authorization in the header of this request
// this Authorization include the Bearer and the token 
//and then return the new request , which is next.handle of the request 
// you can give the value of the token from the local storge ... I saved it with the name 'token'
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>>{
        const token=localStorage.getItem('token'); // retrive value of token from local storage with name (token : i use this name to set it in auth service)
        req=req.clone({ // get a copy to applay Barer Token in Angular [[in postman in Authorization =>type =>Bearer]]
            setHeaders:{ //its object has one proprity [Authorization]
                Authorization:`Bearer ${token}` // add Bearer  to value of token 
            
            }

        });
        return next.handle(req);//handel the request using next side in HttpRequest
    }
}
