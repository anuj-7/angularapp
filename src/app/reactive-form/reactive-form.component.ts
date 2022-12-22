import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  submitted: boolean = false;

  notAllowedNames = ['Codemind', 'Technology']
  genders = [
    {
      id:'1',
      value: 'Male'
    },
    {
      id:'2',
      value: 'Female'
    }
  ]

  myReactiveForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    
    this.createForm();
   }

  ngOnInit() {
    // setTimeout(() => {this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //       },
    //       'course': 'HTML',
    //       'gender': 'Male'
    //       })
    //       }, 3500);

      // setTimeout(() => { this.myReactiveForm.patchValue({
      //         'userDetails' : {
      //           'username': 'anuj.007',
      //           'email': 'akc@gmail.com'
      //           }
      //           })
      //           }, 5000);
        }
  

  createForm(){
    // this.myReactiveForm = new FormGroup({
    //   'userDetails': new FormGroup ({
    //     'username': new FormControl('', [Validators.required, this.NaNames.bind(this)]),
    //     'email': new FormControl('', [Validators.required, Validators.email], this.NaEmails),
    //   }),
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl(''),
    //   'skills' : new FormArray([
    //      new FormControl(null, Validators.required)
    //   ])
    // })

    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this._fb.array([])
    })
  }

  OnSubmit(){
    this.submitted = true;
    console.log(this.myReactiveForm);
   
  }

  OnAddSkills(){
   (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  NaNames( control: FormControl)
  {
    if (this.notAllowedNames.indexOf(control.value)!== -1) {
      return {'namesNotAllowed': true}
    }
    return null;
  }
  NaEmails(control:FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true});
        } else{
          resolve(null);
        }
      }, 3000);
    })
    return myResponse
  }
}
