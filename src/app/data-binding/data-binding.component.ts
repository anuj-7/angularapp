import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent {

  userName: String = 'Anuj Kumar Chauhan';
  
  deleteUserName(){
    this.userName="";
    return false;
  }


}
