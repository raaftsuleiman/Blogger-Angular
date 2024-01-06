import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoriesimage',
  templateUrl: './categoriesimage.component.html',
  styleUrls: ['./categoriesimage.component.css']
})
export class CategoriesimageComponent implements OnInit {
  @Input () image:string|undefined;
  @Input () title:string|undefined;
  @Input () metaTitle:string|undefined;
  @Input () slug:string|undefined;
  @Input () content:string|undefined;
  @Input () lastModification:string|undefined;
  @Input () posts:string|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
