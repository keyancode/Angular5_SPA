import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-bloodrequest',
  templateUrl: './bloodrequest.component.html',
  styleUrls: ['./bloodrequest.component.css']
})
export class BloodrequestComponent implements OnInit {

  reqform: FormGroup;
  constructor(private builder:FormBuilder) { }

  formData = {
    'reqGroup':['',Validators.required],
    'date' : ['',Validators.required],
    'hospital' : ['',Validators.required],
    'unit' : ['',Validators.required]
  };
  ngOnInit() {
    this.reqform = this.builder.group(this.formData);
  }

  public submit(){
    console.log(this.formData);
  }

}
