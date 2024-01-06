import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private spiner: NgxSpinnerService, private toastr: ToastrService, private router: Router) { }
 
  coid : any

  postid :any

  selectedPost: any = [];

  data: any = [{}];

  PostUserLiked: any = [{}];

  LastesPost: any = [{}];

  countlike: any = [];

  getAllLikes: any = [{}];

  getComments: any = [{}];

  displayAllPostUser: any = [{}];

  dpdatePost: any = [{}];

  userById: any = [];

  getCommentUser:any=[{}];

  display_image: any// proparity to save image 


  GoToProfile() {
    this.spiner.show();
    this.router.navigate(['client/profile']);
    this.spiner.hide();
  }


  DisplayAllPost() {
    return this.http.get('http://localhost:35850/api/DTO/DisplayAllPosts');
  }


  DisplayAllPostUsers(id: number) {
    return this.http.get('http://localhost:35850/api/DTO/DisplayAllPostUser/' + id);
  }


  createPost(data: any) {
    this.spiner.show();

    this.http.post('http://localhost:35850/api/Post', data).subscribe(
      (res) => {
        this.toastr.success('Posted');
        this.spiner.hide();
      },
      (err) => {
        this.spiner.hide();
        this.toastr.error('Post Faild!');
      }
    );
  }

  CreateComment(data: any) {

  

    this.spiner.show();
    debugger
    this.http.post('http://localhost:35850/api/PostComment',data).subscribe(
      (result) =>
       {
        
        this.toastr.success('Comment Done');
        this.spiner.hide();
      },
      (err) => {
        this.spiner.hide();
        this.toastr.error('Comment Faild!');
      }
    );
  }



  DisplayPostComments(id : number) {
    this.spiner.show();
    debugger
    this.http.get('http://localhost:35850/api/DTO/DisplayPostComments/'+id).subscribe((result: any) => {
      this.getComments = result;
      this.spiner.hide();

    }, err => {
      this.spiner.hide();

    });


  }

  DisplayPostUserLiked(id: number) {

    debugger
    this.http.get('http://localhost:35850/api/DTO/PostsUserLiked/' + id).subscribe((data: any) => {
      this.PostUserLiked = data;

    })
  }
  GetLastesPost() {

    this.http.get('http://localhost:35850/api/DTO/GetLastesPost').subscribe((data: any) => {
      this.LastesPost = data;

    })
  }


  CountOfLike(id: number) {
    return this.http.get('http://localhost:35850/api/PostLikes/LikesOnPost/' + id);
  }




  deletePost(id: number) {

   

    this.spiner.show();
    this.http.delete('http://localhost:35850/api/Post/delete/' + id).subscribe((data) => {
      this.spiner.hide();
      this.toastr.success("Post Deleted");
    }

    );
  }

  UpdatePost(data: any) {
    debugger
    this.spiner.show();

    this.http.put('http://localhost:35850/api/Post', data).subscribe(
      (res) => {
        this.toastr.success('Posted');
        this.spiner.hide();
      },
      (err) => {
        this.spiner.hide();
        this.toastr.error('Post Faild!');
      }
    );
  }

  uploadAttachment(file: FormData) {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.post('http://localhost:35850/api/Post/upload/', file).subscribe((data: any) => {
      this.display_image = data.image;
      debugger
      if (data) {
        console.log(data);
      }
    });
  }


  SearchPost(text: any) {
    return this.http.get('http://localhost:35850/api/DTO/PostSearch/' + text);

  }

  //Function To Get Last Id
  GetLastUser()
  {
    return this.http.get('http://localhost:35850/api/Users/GetLastUser');

  }


  GetUserById(id: number) {
    debugger
    return this.http.get('http://localhost:35850/api/Users/GetUserById/'+id).subscribe((res: any) => {
      this.userById = res;
    });
      
  }


  UpdateUser(data: any) {
    
    this.spiner.show();

    this.http.put('http://localhost:35850/api/Users',data).subscribe(
      (res) => {
        this.toastr.success('Updated');
        this.spiner.hide();
      },
      (err) => {
        this.spiner.hide();
        this.toastr.error('UpdateFaild!');
      }
    );
  }



  UpdateComment(data: any) {
    
    this.spiner.show();

    this.http.put('http://localhost:35850/api/PostComment/UpdateUserComment',data).subscribe(
      (res) => {
        this.toastr.success('Updated');
        this.spiner.hide();
      },
      (err) => {
        this.spiner.hide();
        this.toastr.error('UpdateFaild!');
      }
    );
  }


  DeleteComment(userid: number,postid: number) {

   
       debugger
       this.spiner.show();
      this.http.delete('http://localhost:35850/api/PostComment/DeleteUserComment/'+userid+'/'+postid).subscribe((re) => {
      this.spiner.hide();
      this.toastr.success("Comment Deleted");
    }

    );
  }


  GetCommentUser(userid: number,postid: number) {
    debugger
    return this.http.get('http://localhost:35850/api/PostComment/GetCommentByUserIdAndPostId/'+userid+'/'+postid).subscribe((res: any) => {
    this.getCommentUser = res;
    });
      
  }


}


