import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecom1',
  templateUrl: './servicecom1.component.html',
  styleUrls: ['./servicecom1.component.css']
})
export class Servicecom1Component implements OnInit {

  productss = {};
  constructor(private _demo: DemoService) { }

  ngOnInit() {
    this.productss = this._demo.products;
  }

  OnSubscribe(){
    this._demo.display();
  }
}
