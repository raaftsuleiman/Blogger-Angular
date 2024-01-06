import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Service/admin.service';
import { HomeService } from 'src/app/Service/home.service';


import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

   


@Component({
  selector: 'app-pdfpost',
  templateUrl: './pdfpost.component.html',
  styleUrls: ['./pdfpost.component.css']
})
export class PdfpostComponent implements OnInit {

 


  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService,
    public adminService:AdminService,
    private dialog:MatDialog
 )
  { }





  //Api Hits process:
  //show spiner 
  // hit api
 //hide spiner 
  //show toastr

  //Function to Get All Posts
  DisplaAllPost()
  {
this.spiner.show();
debugger
this.adminService.DisplaAllPost().subscribe((result:any)=>{ // save return objects in result at define object array in Admin service
  this.adminService.AllPostTable =result;
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})
}

  ngOnInit(): void {
    this. DisplaAllPost();


    function captureScreen() : void {
     

        var data :any = document.getElementById('contentToConvert');
        html2canvas(data).then(canvas => {
            // Few necessary setting options
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
  
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
            pdf.save('Post-Report.pdf'); // Generated PDF
        });
      }
      
     
        // setInterval(captureScreen, 1000);  // to print each report daily 

     setInterval(captureScreen, 86400000);  // to print each report daily 
    // setInterval(captureScreen, 2629800000);  // to print each report monthly
    // setInterval(captureScreen,31556952000);  // to print each report yearly


    

  }
 
  back()
  {
    this.router.navigate(['admin/admin']) // to return to home page 
    // window.location.reload;
  }
 
  
  

}

