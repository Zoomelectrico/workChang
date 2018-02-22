import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }

  buscarCliente(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/User/searchClient', userID, { headers: headers })
      .map(res => res.json().cars.map(car => {
        return {
          ID: car.ID,
          serial: car.serial,
          licensePlate: car.licensePlate,
          model: car.model,
          brand: car.brand,
          year: car.year,
          active: car.active,
          photoLink: car.photoLink,
          OwnerID: car.OwnerID

        };  
      }));
  }

  registrarCarro(car) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Client/CarRegister', car, { headers: headers })
      .map(res => res.json());
  }

  pedirCita(cita) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Client/askAppoiment', cita, { headers: headers })
      .map(res => res.json());
  }

  buscarCarros(clientID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Client/Cars', clientID, { headers: headers })
      .map(res => res.json());
  }

}
