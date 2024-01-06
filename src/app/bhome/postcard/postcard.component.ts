import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { image } from 'html2canvas/dist/types/css/types/image';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
    // Define the proparity of object (post record)[retived by postman] as Input and Display it in html then call the card in *ngfor in home page 
@Input () categoreId:number|undefined;
@Input () slug:string|undefined;
@Input () title:string|undefined;
@Input () image:string|undefined;
@Input () createAt:string|undefined;
@Input () updateAt:string|undefined;
@Input () published:number|undefined;
@Input () postContant:string|undefined;
@Input () endAt:string|undefined;
@Input () lastModification:string|undefined;
@Input () userid:number|undefined;
@Input () categore:string|undefined;
@Input () user:string|undefined;
@Input () postComments:string|undefined;
@Input () postDetalies:string|undefined;
@Input () postReviews:string|undefined;
@Input () postTages:string|undefined;
@Input () webSiteInfos:string|undefined;
loadImage:any="data:image/jpeg;base64,";
constructor(private http: HttpClient, private spiner: NgxSpinnerService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  Delete(){
    // if(this.courseId){
    //   debugger
    //   this.homeS.DeletebyID(this.courseId);
    //   this.toastr.success('Deleted Item');

    // }
    // else {
    //   this.toastr.warning('This item cannot be deleted')
    }

    // getImagePath(value:string ){

    //   let basePath="../../../../assets/images/Uploaded File/";
    //   this.image=basePath+this.image
    //   return basePath+value;
      
    //   }
    NewImage:any;
      getImagePath() {

        debugger
    
        this.spiner.show();
    
        this.http.get('http://localhost:35850/api/Post/getimage/'+this.image).subscribe(
          (result) => {
           this.NewImage=result
            // this.toastr.success(' Done');
            // this.spiner.hide();
          },
          (err) => {
            this.spiner.hide();
            this.toastr.error(' Faild!');
          }
        );
      }
}
