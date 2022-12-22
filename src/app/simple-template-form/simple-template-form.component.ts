import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-template-form',
  templateUrl: './simple-template-form.component.html',
  styleUrls: ['./simple-template-form.component.css']
})
export class SimpleTemplateFormComponent implements OnInit {

  defaultValue: string = "Maharashtra"; 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
console.log(form.value);

  }
  
}
