import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './employee/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // posts: Post[] = [];

  constructor(private http:HttpClient) { }


  fetchPosts(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('name', 'location');
    return this.http.get<{[key:string] : Post}>('https://angularp2-dcb84-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',{headers: new HttpHeaders({
      'custom-header': 'sanket'
    }), 
  params : searchParams}
  ).pipe
    (map(
      (response) => {
        let posts : Post [] = [];
        for (let key in response){
          // ...spread operator
          posts.push({...response[key],key});
        }
        return posts;
      }
    ))
  }

  createPost(postData : Post){
      return this.http.post<{name:string}>('https://angularp2-dcb84-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData);
  }

  clearPosts(){
    return this.http.delete<{name:string}>('https://angularp2-dcb84-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').subscribe(
      response => {
        console.log(response);
      }
    );
  }

}

