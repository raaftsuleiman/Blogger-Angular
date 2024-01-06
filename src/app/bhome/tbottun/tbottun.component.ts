import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialdaialogComponent } from '../testimonialdaialog/testimonialdaialog.component';

@Component({
  selector: 'app-tbottun',
  templateUrl: './tbottun.component.html',
  styleUrls: ['./tbottun.component.css']
})
export class TbottunComponent implements OnInit {

  constructor(    private dialog:MatDialog
    ) { }

  ngOnInit(): void {
  }
  TestimonialDaialog()
  {
    this.dialog.open(TestimonialdaialogComponent)
  }

}
