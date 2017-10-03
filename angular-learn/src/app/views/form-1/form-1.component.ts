import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-1',
  templateUrl: './form-1.component.html',
  styleUrls: ['./form-1.component.scss']
})
export class Form1Component implements OnInit {
  genders:string [] = ['male', 'female'];
  customForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.customForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl(null)
    })
  }

}
