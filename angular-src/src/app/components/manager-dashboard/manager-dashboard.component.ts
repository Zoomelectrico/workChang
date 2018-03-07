import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  // Los datos del usuario
  private user: any;
  // Los datos de las citas pautadas
  private colaEspera = [];
  // Ordenes de esperas activas
  private ordenesActivas = [];
  // Modificar Datos del cliente
  private firstName: string;
  private lastName: string;
  private nationalID: number;
  private email: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private photoURL: string;
  // Cedula para realizar la busqueda
  private nationalIDSearch: string;
  // Datos para formalizar citas
  private date;

  constructor(
    private api: ApiService,
    private modalService: NgbModal,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.api.getCitasActivas().subscribe(data => {
      if(data.success) {
        this.colaEspera = data.appointments;
      } else {
        this.flash.show(data.msg);
        this.colaEspera = [];
      }
    });
    this.api.getOrdenesAbiertas().subscribe(data => {
      if(data.success) {
        this.ordenesActivas = data.activesOrders;
      } else {
        this.ordenesActivas = [];
      }
    });
    /*this.colaEspera = [
      {
        brand: 'Chevrolet',
        model: 'Aveo',
        licensePlate: 'aa000aa'
      },
      {
        brand: 'Ford',
        model: 'Explorer',
        licensePlate: 'AAA000AA'
      }
    ];
    this.ordenesActivas = [
      {
        mechanicName: 'Germano Rojas',
        car: {
          name: 'Jeep Cherokee',
          licensePlate: 'AA00AA'
        }
      },
      {
        mechanicName: 'Germano Rojas',
        car: {
          name: 'Chevrolet Aveo',
          licensePlate: 'AA00AA'
        }
      },
      {
        mechanicName: 'Germano Rojas',
        car: {
          name: 'For Explorer',
          licensePlate: 'AA00AA'
        }
      }
    ];*/
  }

  open(content, orden) {
    console.log(orden);
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  generarOrdenReparacion() {

  }

  buscarCedula() {
    this.api.buscarClientePorCedula({
      nationalID: this.nationalIDSearch
    }).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.firstName = data.user.firstName;
        this.lastName = data.user.lastName;
        this.nationalID = data.user.nationalID;
        this.email = data.user.email;
        this.addressLine1 = data.user.addressLine1;
        this.addressLine2 = data.user.addressLine2;
        this.city = data.user.city;
        this.photoURL = data.user.photoURL;
      } else {
        console.log(data.msg);
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 6000 });
      }
    });
  }

  modificarDatosUsuario() {
    const cliente = {
      firstName: this.firstName,
      lastName: this.lastName,
      nationalID: this.nationalID,
      email: this.email,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      photoURL: this.photoURL
    };
    this.api.modificarDatosCliente(cliente).subscribe(data => {
      if (data.success) {
        this.flash.show(data.msg);
      } else {
        this.flash.show(data.msg);
      }
    });
  }

}
