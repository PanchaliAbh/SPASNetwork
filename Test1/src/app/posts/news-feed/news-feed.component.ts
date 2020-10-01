import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from '../services.service';
import { News } from '../models/news-feed';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  newsfeed$:Observable<News[]>

  
  constructor(private Service: ServicesService) { }

  ngOnInit(): void {
    this.newsfeed$=this.Service.getNews();
  }


}
