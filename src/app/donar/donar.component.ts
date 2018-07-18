import { Component, OnInit } from '@angular/core';
import { BloodDonar } from '../blood-donar';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent implements OnInit {

  donarList: BloodDonar[];
  reqid:any;
  constructor(private route: ActivatedRoute, private router:Router) { 
    this.donarList= [
      {
        id: 1 ,location: "chennai",bloodGroup:"apos",name:"ABC1"
      }
    ]
  }

  
  ngOnInit() {
    this.route.params.subscribe(params => 
      this.reqid = params['id']
      );
    
  }

}
