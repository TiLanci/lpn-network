import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _loginRoute = environment.API_Url + "/auth/login"
  constructor(private _http : HttpClient) { }

  logIn(username,password){
    return this._http.post(this._loginRoute,{username:username,password:password})
  }

  loggedIn():boolean{
    if(sessionStorage.getItem('token')) {return  true}
    else {return false}
  }

  getToken(){
    return sessionStorage.getItem('token')
  }
}
