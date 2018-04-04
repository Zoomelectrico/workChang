import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QrcodeService {

  constructor(private http: Http) { 
    
  }

  guardarQR(qr){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('qr',{ qr: qr } ,{ headers: headers })
      .map(res => res.json());
  }

}
