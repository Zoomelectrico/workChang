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
      .map(res => res.json());
   
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

  buscarCarros(OwnerID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Client/Cars', OwnerID, { headers: headers })
      .map(res => res.json().cars.map(car => {
        if (car.active) {
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
        }
      }));
  }

  buscarClientePorCedula(cedula) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Client/search-nationalID', cedula, { headers: headers })
    .map(res => res.json());
  }

  modificarDatosCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Client/modify', cliente, { headers: headers })
    .map(res => res.json());
  }

  getCitasActivas() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/Manager/appointments', { headers: headers })
    .map(res => res.json());
  }

}
