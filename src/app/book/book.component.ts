import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent implements OnInit {
  public title = "Phương"
 
  //property binding
  public image = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  public welcometext = "Chào mừng đến với angular";
  
  public applyClass = true; // bằng true thì áp dụng color, false thì k
  public applyStyle = false;
  
  //Event binding
  fname: string = '';
  lname: string = '';
  
  OnClick(value:any){
    console.log(value);
  }
  //Stuctural Directives
  public showLineIf = true;
  public color = "red";
  public colors: string[] = ["red","green", "blue"];

  //Attribute Directives
  public cone = true;
  public ctwo = true;

  toggle(){
     this.cone = !this.cone;
     this.ctwo = !this.ctwo;
  }

  constructor() { 
  
  }

  ngOnInit(): void {
  }
}
