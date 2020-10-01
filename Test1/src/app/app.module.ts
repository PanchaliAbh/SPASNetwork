import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { PostComponent } from './posts/post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsFeedComponent } from './posts/news-feed/news-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
