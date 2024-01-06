import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { AdminService } from 'src/app/Service/admin.service';
import { HomeService } from 'src/app/Service/home.service';
// import { ChartDataset, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService,
    public adminService:AdminService,
    private dialog:MatDialog
 ) { }
 
 likes:any=3;
 posts:any=15;
 Users:any=7;
 Comments:any=2;


  ngOnInit(): void {
    this.Users=this.CountOfUsers();
    this.posts= this.CountOfPostes();
   this.Comments= this.CountOfComments();
    this.likes= this.CountOfLikes();

  }
  

  //Api Hits process:
  //show spiner 
  // hit api
 //hide spiner 
  //show toastr


   //Function To Get the Count Of Users 
   CountOfUsers()
   {
    this.spiner.show();
    debugger
    this.adminService.CountOfUsers().subscribe((result:any)=>{ // save return object in result at define object [CountUsers]  in Admin service
      this.adminService.CountUsers =result;
      this.Users=result
      this.spiner.hide();
      this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      this.tostr.error('something want worring!!')
    })
    }

     //Function To Get the Count Of Posts
     CountOfPostes()
   {
      this.spiner.show();
      debugger
      this.adminService.CountOfPostes().subscribe((result:any)=>{ // save return object in result at define object [CountPosts]  in Admin service
      this.adminService.CountPosts =result;
      this.posts=result
      this.spiner.hide();
      this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      this.tostr.error('something want worring!!')
    })
    }

      //Function To Get the Count Of Comments
      CountOfComments()
   
      {
        this.spiner.show();
        debugger
        this.adminService.CountOfComments().subscribe((result:any)=>{ // save return object in result at define object [CountComments]  in Admin service
        this.adminService.CountComments =result;
        this.Comments=result
        this.spiner.hide();
        this.tostr.success('Data Retrived !!!')
      },err=>{
        this.spiner.hide();
        this.tostr.error('something want worring!!')
      })
      }

         //Function To Get the Count Of Likes in Page
         CountOfLikes()
         {
          this.spiner.show();
          debugger
          this.adminService.CountOfLikes().subscribe((result:any)=>{ // save return object in result at define object [CountLikes]  in Admin service
          this.adminService.CountLikes =result;
          this.likes=result;
          this.spiner.hide();
          this.tostr.success('Data Retrived !!!')
        },err=>{
          this.spiner.hide();
          this.tostr.error('something want worring!!')
        })
        }


  // public chartType: string = 'bar';

 
  // public chartDatasets: Array<any> = [
  //   { data: [this.adminService.CountPosts.toFixed()], label: 'Count Of Likes' },
  //   { data: [this.Comments], label: 'Count of Comments' },
  //    { data: [ this.posts], label: 'Count of Posts' },
  //    { data: [ this.Users], label: 'Count of Users' },



  //   //  { data: [this.adminService.CountPosts], label: 'Count Of Posts' },
  //   //  { data: [ this.adminService.CountUsers], label: 'Count of Comments' },
  //   //   { data: [ this.adminService.CountLikes], label: 'Count of Likes' }

  // ];

  // public chartLabels: Array<any> = ['MyBlogger']

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: 'blue',
  //     borderColor: 'ghostwhite',
  //     borderWidth: 2,
  //   },
  //   {
  //     backgroundColor: 'green',
  //     borderColor: 'ghostwhite',
  //     borderWidth: 2,
  //   },
  //   {
  //     backgroundColor: 'crimson',
  //     borderColor: 'ghostwhite',
  //     borderWidth: 2,
  //   },
  //   {
  //     backgroundColor: 'black',
  //     borderColor: 'ghostwhite',
  //     borderWidth: 2,
  //   }
  // ];

  // public chartOptions: any = {
  //   responsive: true
  // };
  // public chartClicked(e: any): void { }
  // public chartHovered(e: any): void { }



  
    public chartType: string = 'bar';
  public chartDatasets: Array<any> = [
    { data: [this.Users, this.likes,this.Comments,this.posts], label: 'My Blogger Detalies ' }
  ];

  public chartLabels: Array<any> = ['Users', 'Likes',  'Comments', 'Postes', ];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
      
        'black',
        'blue',
        'green',
        'crimson',
        'rgba(255, 159, 64, 0.9)'
      ],
      borderColor: [
   
        'gray',
        'gray',
        'gray',
        'gray',
        'gray',
      ],
      borderWidth: 5,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}