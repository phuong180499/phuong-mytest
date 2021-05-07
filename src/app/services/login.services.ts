import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class LoginService{
    public isLoggedIn!: boolean;
    router: any;
    IsLogged():boolean{     //check gtri có login hay k
       return this.isLoggedIn;
    }

    checkLogin(value:any){
        console.log(value)
        this.router.navigate(['/']);
    }

    SetLogin(isLogged: boolean){
        this.isLoggedIn = isLogged;
    }
}
