import { Component,OnInit } from '@angular/core';
import { LoginService } from './services/login.services';
// import { Component, ViewChild } from '@angular/core';
// import {WordComponent} from './word/word.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any;
  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  // public title = "Phương"

  // //property binding
  // public image = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  //BAI13
  //sự kiên vote
  // public agree: number = 0;    //đếm lượt vote
  // public disgree: number = 0;
  // public names = ['Mr A','Mr B', 'Mr C', 'Mr D'];

  // parentVote(agree: boolean){
  //   if(agree) this.agree++;
  //   else this.disgree++;
  // }

  // @ViewChild(WordComponent)
  // private wordComponent!: WordComponent;

  // changeName(){
  //   this.wordComponent.setName('Thay đổi tên Parent');
  // }
  public isLoggedin: boolean | undefined;
  constructor(private loginService: LoginService){

  }
  ngOnInit(){
     this.isLoggedin = this.loginService.IsLogged();
  }
  Logout(){
     this.loginService.SetLogin(false);
     alert('Logged out');
  }
}
