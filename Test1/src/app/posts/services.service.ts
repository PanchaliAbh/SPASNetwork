import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './models/news-feed';
import { Comments } from './models/comments';
import { Post } from '../posts/models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  
 getNews(): Observable<News[]>{
  return this.http.get<News[]>("https://jsonplaceholder.typicode.com/posts");

 }

  getPost(id): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts/"+""+id);
  }

  getComments(id): Observable<Comments[]>{
    return this.http.get<Comments[]>("https://jsonplaceholder.typicode.com/comments?postId="+""+id);
  }

}
