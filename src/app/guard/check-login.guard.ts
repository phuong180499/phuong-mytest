import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services/login.services';


@Injectable()
export class checkLoginGuard implements CanActivate{

    constructor(private loginService: LoginService){

    }
    canActivate(){
        let status= this.loginService.IsLogged();
        // if(status==false)
        //    alert('you don\'t have permission access to this page');
        return true;
    }
}
