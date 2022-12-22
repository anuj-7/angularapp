import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor (private _demoService: DemoService)
{

}


ngOnInit(): void {

  }
  
}

  // title = '2';
  // EmployeeRecords: any = [
  //   {
  //     eName: 'Anuj', eCity:'pune', eSalary: '200000'
  //   },
  //   {
  //     eName:'Sumit', eCity: 'nagpur', eSalary: '150000'
  //   }
  // ]
  // foods: string[] = [];

  // getDataFromChild(value) {
  //   console.log(value);
  //   this.foods.push(value);
  // }


