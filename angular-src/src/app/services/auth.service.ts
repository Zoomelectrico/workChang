import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private token: any;
  private user: any;

  constructor(
    private http: Http,
    public jwtHelper: JwtHelperService
  ) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('User/register', user, { headers: headers })
      .map(res => res.json());
  }

  login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('user/auth', credentials, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    this.token = token;
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');
  }

  isLogged() {
    if (!localStorage.getItem('token')) {
      return false;
    } else {
      return !(this.jwtHelper.isTokenExpired(localStorage.getItem('token')));
    }
  }

  logOut() {
    this.user = null;
    this.token = null;
    localStorage.clear();
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

}
