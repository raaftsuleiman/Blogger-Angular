import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserDetaliesComponent } from '../admin/user-detalies/user-detalies.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loadImage:any="data:image/jpeg;base64,";
  AllPostTable : any =[{}] // array of(object)  records in about us table as objects 
  PostDaialog:any=[{}] 
  AllUsers:any=[{}] 
  CountUsers:number=0 //object to Get Count Record of Users
  CountPosts:number=0 
  CountComments:number=0
  CountLikes:number=0
  display_image:any// proparity to save image 
  SearchArray:any=[{}] 
  AboutId:any;
  /*****************Information About User From User Page in Admin Dashboard ************************/
  DetaliesId:number=0;
  email:string='';
  mobile :string='';
  profileDescription:string='';
  /*************************************************************************************************/
  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router, private dialog:MatDialog) { }
  

  
  //show spiner
  //hits api
  //hide spiner
  //show toastr

  
  //Function to Get All Posts
  DisplaAllPost()
  {
    return this.http.get('http://localhost:35850/api/DTO/DisplayAllPosts')

  }
  //Function to Get All Posts after Search 
  Search(text:any)
  {
    return this.http.get('http://localhost:35850/api/DTO/Search/'+text)

  }
//Function to Get All Users after Search 
SearchUser(text:any)
{
  return this.http.get('http://localhost:35850/api/Users/UserSearch/'+text)

}
  //Function To Delete Post By Id 
  DeletebyID(id:number){
    this.spiner.show();
    debugger
    this.http.delete('http://localhost:35850/api/Post/delete/'+id).subscribe((date:any)=>{
      this.spiner.hide();
      this.toastr.success('Deleted ');
      
    
    },err=>{
      this.spiner.hide();
    
    })
      }
    //Function To Get All Users 

      DisplaAllUsers()
      {
        return this.http.get('http://localhost:35850/api/Users/GetAllUsers')
      }
     //Funvtion to Delete User By Id

      DeleteUserbyID(id:number){
        this.spiner.show();
        debugger
        this.http.delete('http://localhost:35850/api/Users/DeleteUser/'+id).subscribe((date:any)=>{
        this.spiner.hide();
        this.toastr.success('Block ');
          
        
        },err=>{
          this.spiner.hide();
        
        })
          }

          DeletebyCatID(id:number){
            this.spiner.show();
            debugger
            this.http.delete('http://localhost:35850/api/Category/delete/'+id).subscribe((date:any)=>{
            this.spiner.hide();
            this.toastr.success('Deleted ');
              
            
            },err=>{
              this.spiner.hide();
            
            })
              }


//Function To Create Post in Daialog
      create(data:any){
        this.spiner.show();
        debugger
        this.http.post('http://localhost:35850/api/Post/',data).subscribe((res:any)=>{
          this.toastr.success('Created');
          this.spiner.hide();
     
        },err=>{
         this.spiner.hide();
         this.toastr.error('not created');
      
        })
     
      }
// to Display Detalies From Get All Array Object in Daialog in User detalies Card 
      openDetalies(id:any,email:any,mobile:any,profileDescription:any)
      {

        this.DetaliesId=id;
        this.email=email;
        this.mobile=mobile;
        this.profileDescription=profileDescription;
        this.dialog.open(UserDetaliesComponent)

      }


      //Function To Get the Count Of Users 
      CountOfUsers()
      {
      
        return this.http.get('http://localhost:35850/api/Users/CountOfUsers')

      }

      //Function To Get the Count Of Postes
      CountOfPostes()
           {
           
             return this.http.get('http://localhost:35850/api/Post/CountOfPost')
     
           }

        //Function To Get the Count Of Comments
        CountOfComments()
        {
        
          return this.http.get('http://localhost:35850/api/PostComment/CountOfComments')
  
        }

      //Function To Get the Count Of Likes in Page
      CountOfLikes()
      {
              
       return this.http.get('http://localhost:35850/api/PostLikes/CountOfLikes')
        
       }


     

        uploadAttachment(file:FormData){
          //debugger
          const headerDict = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
          const requestOptions = {
          headers: new HttpHeaders(headerDict),
          };
          this.http.post('http://localhost:35850/api/Post/upload/',file).subscribe((data: any) => {
          this.display_image=data.image;
          debugger
          if(data){
          console.log(data);
          console.log(this.display_image=data.image);
        }
          }, err => {
         
          })


          

    
  


          }

          uploadAttachmentAbout(file:FormData){
            //debugger
            const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
            const requestOptions = {
            headers: new HttpHeaders(headerDict),
            };
            this.http.post('http://localhost:35850/api/AboutUs/upload/',file).subscribe((data: any) => {
            this.display_image=data.image;
            debugger
            if(data){
            console.log(data);
            console.log(this.display_image=data.image);
          }
            }, err => {
           
            })
          }
          UpdateAbout(data: any) {
            debugger
            this.spiner.show();
        
            this.http.put('http://localhost:35850/api/AboutUs', data).subscribe(
              (res) => {
                this.toastr.success('Edited');
                this.spiner.hide();
              },
              (err) => {
                this.spiner.hide();
                this.toastr.error('Edite Faild!');
              }
            );
          }


      

            createAbout(data:any){
              this.spiner.show();
              debugger
              this.http.post('http://localhost:35850/api/AboutUs/',data).subscribe((res:any)=>{
                this.toastr.success('Created');
                this.spiner.hide();
           
              },err=>{
               this.spiner.hide();
               this.toastr.error('not created');
            
              })




            }

            createCategory(data:any){
              this.spiner.show();
              debugger
              this.http.post('http://localhost:35850/api/Category/',data).subscribe((res:any)=>{
                this.toastr.success('Created');
                this.spiner.hide();
           
              },err=>{
               this.spiner.hide();
               this.toastr.error('not created');
            
              })

            }
}
