import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [NewsFeedComponent, PostComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
