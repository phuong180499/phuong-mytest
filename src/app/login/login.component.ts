import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }
  checkLogin(value:any){
    console.log(value);
    // if(value.username=="admin" && value.password=="123")
    // this.loginService.SetLogin(true);
    this.router.navigate(['/'])
  }

}
