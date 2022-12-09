import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-box',
  templateUrl: './first-box.component.html',
  styleUrls: ['./first-box.component.css']
})
export class FirstBoxComponent implements OnInit {

  @Input () employee: any;

  constructor(){}
  
  ngOnInit(){
    console.log('From parent', this.employee);
    
  }
  

}
