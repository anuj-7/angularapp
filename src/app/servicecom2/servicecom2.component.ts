import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecom2',
  templateUrl: './servicecom2.component.html',
  styleUrls: ['./servicecom2.component.css']
})
export class Servicecom2Component implements OnInit {

  productsss= {}
  constructor(private _demos: DemoService) { }

  ngOnInit() {
    this.productsss = this._demos.products;
  }

  OnSubscribe(){
    this._demos.display();
  }

}
