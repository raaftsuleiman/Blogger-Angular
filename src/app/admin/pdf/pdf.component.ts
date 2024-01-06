import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Service/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {






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
     
        let data = document.getElementById('contentToConvert');
        html2canvas(data as any)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF({
            orientation: 'landscape',
          });
          const imgProps= pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('download.pdf');
        });
      }
     
        // setInterval(captureScreen, 1000);  // to print each report daily 

        
     setInterval(captureScreen, 86400000);  // to print each report daily 
    // setInterval(captureScreen, 2629800000);  // to print each report monthly
    // setInterval(captureScreen,31556952000);  // to print each report yearly


  }
 
  
  

}
