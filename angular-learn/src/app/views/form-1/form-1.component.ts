import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-form-1',
  templateUrl: './form-1.component.html',
  styleUrls: ['./form-1.component.scss']
})
export class Form1Component implements OnInit {
  genders:string [] = ['male', 'female'];
  forbidenNames = ['Urij', 'Valera'];
  customForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.customForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl( null, [Validators.required, this.checkNameValidator.bind(this)] ),
        'email': new FormControl(null, [Validators.required, Validators.email], this.checkEmailValidator.bind(this))
      }),
      'gender': new FormControl(null),
      'hobbies': new FormArray([])
    });

    // this.customForm.valueChanges.subscribe((value)=> {
    //         console.log(value)
    // })

    this.customForm.statusChanges.subscribe((value)=> {
      console.log(value)
    })


  }


  onSubmit(){
    console.log(this.customForm)
  }

  addHobby(){
      let control = new FormControl(null, Validators.required );
    (<FormArray>this.customForm.get('hobbies')).push(control)
  }

  checkNameValidator(control : FormControl): {[s: string] : boolean}{

    if (this.forbidenNames.includes(control.value)){
       return {'isForbiden': true};
    }
    return null;
  }

  checkEmailValidator(control :FormControl): Observable<any> | Promise<any> {

    let promise = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(control.value !== 'test@test.ru'){
          resolve({'validEmail': true})
        } else {
          resolve(null)
        }
      }, 2000)
    });

    return promise
  }

}
