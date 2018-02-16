import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  token: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(credential) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/User/register', credential, { headers: headers })
      .map(res => res.json());
  }


  
}
