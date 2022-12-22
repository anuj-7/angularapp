import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})

export class ApiDataComponent implements OnInit {

  userData: any = [];
  constructor(private _demoService: DemoService) {

    this._demoService.getUsersData().subscribe(data => {
      console.log(data);     
      this.userData=data;
    }
    )
    }

    ngOnInit(): void {

    }
  }

