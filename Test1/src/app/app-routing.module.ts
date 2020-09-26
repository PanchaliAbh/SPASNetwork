import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
const routes: Routes = [{ path: 'post', component: PostComponent },
{ path: 'news-feed', component: NewsFeedComponent },
{ path: 'news-feed/post', component: PostComponent },
{ path: 'post/:id', component: PostComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
