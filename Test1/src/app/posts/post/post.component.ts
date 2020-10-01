import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { Post } from '../models/post.model';
import { Comments } from '../models/comments';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post$:Observable<Post[]>
  comments$:Observable<Comments[]>
  id :any

  constructor(private activatedRoute: ActivatedRoute, private Service: ServicesService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.post$=this.Service.getPost(this.id);

   this.comments$=this.Service.getComments(this.id);
 }

}
