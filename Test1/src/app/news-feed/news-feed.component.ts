import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  data:Array<any>
  getData(): Observable<any>{
    const url="https://jsonplaceholder.typicode.com/posts"
    return this.http.get<any>(url)
  }

  getDataFromAPI(){
    this.getData().subscribe((data) =>{
      console.log(data)
      this.data=data
    })
  }

  constructor(private http:HttpClient) { 
   this.data=new Array<any>()
   this.getData()
   this.getDataFromAPI()

  }

  ngOnInit(): void {
  }

}
