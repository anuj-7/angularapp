import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  arrPosts: any;

  constructor(private _PostService: PostService) { }

  ngOnInit()
  {
    this._PostService.getPosts().subscribe(res => {
      this.arrPosts = res;
      console.log('jasonplaceholder', res);
    })
  }

}
