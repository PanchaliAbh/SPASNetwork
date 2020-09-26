import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   
  data2:Array<any>
  data3:Array<any>
  id: any;
  userId: any;
  pid: any;
  ptitle: any;
  pbody: any;
  
  getData2(): Observable<any>{
    const url2="https://jsonplaceholder.typicode.com/posts/"+""+this.id
    return this.http.get<any>(url2)
  }

  getDataFromAPI2(){
    this.getData2().subscribe((data2) =>{
      console.log(data2)
      this.userId=data2.userId
      this.pid=data2.id
      this.ptitle=data2.title
      this.pbody=data2.body
    })
  }

  getData3(): Observable<any>{
    const url3="https://jsonplaceholder.typicode.com/comments?postId="+""+this.id
    return this.http.get<any>(url3)
  }

  getDataFromAPI3(){
    this.getData3().subscribe((data3) =>{
      console.log(data3)
      this.data3=data3
    })
  }
  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data2=new Array<any>()
    this.data3=new Array<any>()
    this.getData2()
    this.getDataFromAPI2()
    this.getData3()
    this.getDataFromAPI3()

  }
  
  ngOnInit(): void {
  }

}
