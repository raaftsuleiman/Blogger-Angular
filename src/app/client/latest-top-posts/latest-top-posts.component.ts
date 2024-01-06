import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-latest-top-posts',
  templateUrl: './latest-top-posts.component.html',
  styleUrls: ['./latest-top-posts.component.css']
})
export class LatestTopPostsComponent implements OnInit {

 
  @Input() title: string | undefined;
  @Input() metaTitle: string | undefined;
  @Input() image: string | undefined;
  @Input() createAt: string | undefined;
  


  constructor(public client: ClientService) { }

  GetLastesPost()
  {
     this.client.GetLastesPost();
  }

  ngOnInit(): void 
  {
    this.client.GetLastesPost();
  }

}
