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
    return this.http.get('User/get-workers', { headers: headers })
      .map(res => res.json());
  }

  getUsuariosByID(search, type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(type == 'ID'){
      return this.http.post('User/searchUsersByID', search, { headers: headers })
      .map(res => res.json());
    } else if (type == 'nationalID') {    
      return this.http.post('User/searchUsersByNationalID', search, { headers: headers })
      .map(res => res.json());
    } else if (type == 'name') {    
      return this.http.post('User/searchUsersByName', search, { headers: headers })
      .map(res => res.json());
    } else if (type == 'username') {    
      return this.http.post('User/searchUsersByUsername', search, { headers: headers })
      .map(res => res.json());
    } else if (type == 'email') {    
      return this.http.post('User/searchUsersByEmail', search, { headers: headers })
      .map(res => res.json());
    }
  }

  getUsuariosByNationalID(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('User/searchUsersByID', userID, { headers: headers })
      .map(res => res.json());
  }

  modificarDatosUsuario(usuario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('User/modify-User', usuario, { headers: headers })
    .map(res => res.json());
  }

  buscarCliente(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('User/searchClient', userID, { headers: headers })
      .map(res => res.json());
  }

  registrarCarro(car) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Client/CarRegister', car, { headers: headers })
      .map(res => res.json());
  }

  pedirCita(cita) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Client/askAppoiment', cita, { headers: headers })
      .map(res => res.json());
  }

  buscarCarros(OwnerID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Client/Cars', OwnerID, { headers: headers })
      .map(res => res.json().cars.filter(car => car.active == 1 ));
  }

  buscarClientePorCedula(cedula) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Client/search-nationalID', cedula, { headers: headers })
    .map(res => res.json());
  }

  modificarDatosCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Client/modify', cliente, { headers: headers })
    .map(res => res.json());
  }

  getCitasActivas() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('Manager/appointments', { headers: headers })
    .map(res => res.json());
  }
  
  getOrdenesAbiertas() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('Manager/actives-orders', { headers: headers })
    .map(res => res.json());
  }

  buscarMecanico(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('User/searchMechanic', userID, { headers: headers })
      .map(res => res.json());   
  }

  registrarRepuesto(replacement) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Admin/new-Replacement', replacement, { headers: headers })
      .map(res => res.json());
  }

  getRepuestos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('Admin/replacements', { headers: headers })
      .map(res => res.json());
  }

  getRepuestosByPartNumber(partNumber) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Admin/searchByPartNumber', partNumber, { headers: headers })
      .map(res => res.json());
  }

  modificarRepuesto(replacement) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Admin/modify-Replacement', replacement, { headers: headers })
      .map(res => res.json());
  }

  getMecanicosDisponibles() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('Manager/available-mechanics', { headers: headers })
      .map(res => res.json());
  }

  nuevaOrdenReparacion(orden) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Manager/create-RepairOrder', orden, { headers: headers })
      .map(res => res.json());
  }

  getOrdenes(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Mechanic/repair-orders', user, { headers: headers })
      .map(res => res.json());
  }

  desactivarVehiculo(serial) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Client/desactive-cars', serial, { headers: headers })
      .map(res => res.json());
  }

  getCitasPedidas(userID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`Client/all-appoiments/${userID}`, { headers: headers })
      .map(res => res.json());
  }

  verDetallesReparacion(ids) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Manager/order-details', ids, { headers: headers })
      .map(res => res.json());
  }

  recibirVehiculo(detalles) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Manager/receive-car', detalles, { headers: headers })
      .map(res => res.json());
  }

  contactEmail(email) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Email/contact', email, { headers: headers })
      .map(res => res.json());
  }

  getRepuestoModelos(model) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`Mechanic/replacements/${model}`, { headers: headers })
      .map(res => res.json());
  }

  actualizarOrden(datos){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Mechanic/change-order', datos, { headers: headers })
      .map(res => res.json());
  }

  cerrarOrdenMecanico(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('Mechanic/close-order', id, { headers: headers })
      .map(res => res.json());
  }

  getOrdenByID(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`Mechanic/order/${id}`, { headers: headers })
      .map(res => res.json());
  }

  cerrarOrden(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`Manager/close-order`, data, { headers: headers })
      .map(res => res.json());
  }
  
  historicoCliente(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`Reports/clientHistorical`, data, { headers: headers })
      .map(res => res.json());
  }

  historicoVehiculo(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`Reports/carHistorical`, data, { headers: headers })
      .map(res => res.json());
  }

  historicoMecanico(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`Reports/mechanicHistorical`, data, { headers: headers })
      .map(res => res.json());
  }

  historicoModelo(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`Reports/modelHistorical`, data, { headers: headers })
      .map(res => res.json());
  }

  getCarBySerial(serial) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`Mechanic/car/${serial}`, { headers: headers })
      .map(res => res.json());  
  }

  getEmpleadoByApellido(apellido) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`Manager/empleado/${apellido}`, { headers: headers })
      .map(res => res.json());  
  }

}
