import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public title = "Hello Phương";
  public today = new Date();
  // public today = Date.now();
  public percentNumber = 1.3495;
  public object: object = {foo: 'bar', baz:'qux', nested: {xyz: 3, number: [1, 2, 3, 4, 5]}};

  public collection: string[] = ['a','b','c','d'];  //mảng lặp
  
  constructor() { }

  ngOnInit(): void {
  }

}
