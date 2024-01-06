import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-tages',
  templateUrl: './tages.component.html',
  styleUrls: ['./tages.component.css']
})
export class TagesComponent implements OnInit {

  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService,
 ) { }

  ngOnInit(): void {
    this.GetAllTestimoneal()
  }
  title = 'html-to-pdf-angular-application';
  public convetToPDF() {
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
LogOut()
{    
  this.router.navigate(['Login']) // to return to home page 
  localStorage.clear() // to clear local storage [delete token]
  this.router.navigate(['Login']) // to return to home page 
  // window.location.reload;
}


//Function To Get All Testimoneal  Record 
GetAllTestimoneal()
{
  this.spiner.show();
  debugger
  this.homeService.GetAllTestimoneal().subscribe((result:any)=>{ // save return objects in result at define object array in home service
    this.homeService.AllTestimoneal=result;
    this.spiner.hide();
    this.tostr.success('Data Retrived !!!')
  },err=>{
    this.spiner.hide();
    this.tostr.error('something want worring!!')
  })
}
}
