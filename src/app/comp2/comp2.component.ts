import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName;
  constructor() { }

  ngOnInit() {
  }

  updateUserName(uname){
    console.log(uname.value);
    
  }
}
