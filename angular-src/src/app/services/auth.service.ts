import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  token: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/User/register', user, { headers: headers })
      .map(res => res.json());
  }

  login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/User/auth', credentials , { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    const token = localStorage.getItem('id_token');
    this.token = token;
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');
  }
  
}
