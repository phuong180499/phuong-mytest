import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
  onSubmit(value:any){
    console.log(value);
  }

  public cities = [          //DS CHỌN
    {Id: 1, Name: "Ha Noi"},
    {Id: 2, Name: "HCM"}
  ]

  constructor() { }
  ngOnInit(): void {
  }
  /*
  showEvent(event:any){
    this.name = event.target.value;
  }
  */

}
