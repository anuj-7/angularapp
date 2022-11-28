import { Component, OnInit } from '@angular/core';
import { Course } from '../models/movies';

@Component({
  selector: 'app-assign-dir',
  templateUrl: './assign-dir.component.html',
  styleUrls: ['./assign-dir.component.css']
})
export class AssignDirComponent {

  isShow: boolean = false;
  title: string = "Top 3 Course";
  courses: Course[]= [
    { courseID: 'A001', courseName: 'Angular', duration: '45 Days', fees: '10 k' },
    { courseID: 'A002', courseName: 'JavaScript', duration: '30 Days', fees: '7 k' },
    { courseID: 'A003', courseName: 'HTML & CSS', duration: '20 Days', fees: '3 k' }
  ]

  ischecked(){
    this.isShow = true;
  }

  selectedCourse: string;

  getCoursedetails(value){
    console.log(value.target.value);
    this.selectedCourse = value.target.value;
    
  }
}
