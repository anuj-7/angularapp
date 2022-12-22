import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL = 'https://jsonplaceholder.typicode.com/';
  products = [
    {name: 'Laptop', id : '101'},
    {name: 'Mobile', id : '102'},
    {name: 'TV', id : '103'},
    {name: 'Tablet', id : '104'}
  ]
  constructor(private http: HttpClient) { }
  display(){
    alert('Subscribed successfully')
  }
//this method will give the user data from API.
  getUsersData(): Observable<any>
  {
    let users = 'users';
   return this.http.get(this.apiURL+ users);
  }
  
  // this method will return post data from API.
  getPostData(): Observable<any>
  {
    let posts = 'posts';
   return this.http.get (this.apiURL+ posts);
  }
  
}
