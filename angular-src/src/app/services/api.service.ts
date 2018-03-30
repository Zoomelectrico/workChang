import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }

  getUsuariosWorkers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/User/get-workers', { headers: headers })
      .map(res => res.json());
  }

  getUsuariosByID(search, type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(type == 'ID'){
      return this.http.post('http://localhost:3000/User/searchUsersByID', search, { headers: headers })
      .map(res => res.json());
    }else if(type == 'nationalID') {    
      return this.http.post('http://localhost:3000/User/searchUsersByNationalID', search, { headers: headers })
      .map(res => res.json());
    }else if(type == 'name') {    
      return this.http.post('http://localhost:3000/User/searchUsersByName', search, { headers: headers })
      .map(res => res.json());
    }else if(type == 'username') {    
      return this.http.post('http://localhost:3000/User/searchUsersByUsername', search, { headers: headers })
      .map(res => res.json());
    }else if(type == 'email') {    
      return this.http.post('http://localhost:3000/User/searchUsersByEmail', search, { headers: headers })
      .map(res => res.json());
    }
  }

  getUsuariosByNationalID(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/User/searchUsersByID', userID, { headers: headers })
      .map(res => res.json());
  }

  modificarDatosUsuario(usuario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/User/modify-User', usuario, { headers: headers })
    .map(res => res.json());
  }

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
      .map(res => res.json().cars.filter(car => car.active == 1 ));
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
  
  getOrdenesAbiertas() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/Manager/actives-orders', { headers: headers })
    .map(res => res.json());
  }

  buscarMecanico(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/User/searchMechanic', userID, { headers: headers })
      .map(res => res.json());   
  }

  registrarRepuesto(replacement) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Admin/new-Replacement', replacement, { headers: headers })
      .map(res => res.json());
  }

  getRepuestos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/Admin/replacements', { headers: headers })
      .map(res => res.json());
  }

  getRepuestosByPartNumber(partNumber) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Admin/searchByPartNumber', partNumber, { headers: headers })
      .map(res => res.json());
  }

  modificarRepuesto(replacement) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Admin/modify-Replacement', replacement, { headers: headers })
      .map(res => res.json());
  }

  getMecanicosDisponibles() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/Manager/available-mechanics', { headers: headers })
      .map(res => res.json());
  }

  nuevaOrdenReparacion(orden) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Manager/create-RepairOrder', orden, { headers: headers })
      .map(res => res.json());
  }

  getOrdenes(userID){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Mechanic/repair-orders', userID, { headers: headers })
      .map(res => res.json());
  }

  desactivarVehiculo(serial) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Client/desactive-cars', serial, { headers: headers })
      .map(res => res.json());
  }

  getCitasPedidas(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`http://localhost:3000/Client/all-appoiments/${userID}`, { headers: headers })
      .map(res => res.json());
  }

  verDetallesReparacion(ids) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Manager/order-details', ids, { headers: headers })
      .map(res => res.json());
  }

}
