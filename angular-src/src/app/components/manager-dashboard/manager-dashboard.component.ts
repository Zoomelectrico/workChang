import { Component, OnInit, ViewChild } from '@angular/core';
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
  private user: any;
  private colaEspera = [];
  private ordenesActivas = [];
  private mecanicos = [];
  private firstName: string;
  private lastName: string;
  private nationalID: number;
  private email: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private photoURL: string;
  private nationalIDSearch: string;
  private date;
  private cita;
  private mecanico;
  private orden = {};
  @ViewChild('descargar') btn;

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
    this.api.getMecanicosDisponibles().subscribe(data => {
      if (data.success) {
        this.mecanicos = data.mechanics;
        this.mecanico = this.mecanicos[0].mechanicID;
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  openDetOrden (content, orden) {
    this.orden = {};
    this.api.verDetallesReparacion({
      "repairOrderID": orden.ID,
      "mechanicID": orden.mechanicID,
      "carID": orden.carID
    }).subscribe(data => {
      if (data.success) {
        this.orden = data.detalles
        console.log(this.orden);
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  
  onChange(mecanicoID) {
    this.mecanico = mecanicoID;
  }

  openFinOrden (content, cita) {
    if (this.date) {
      this.cita = cita;
      this.modalService.open(content, { windowClass: 'dark-modal' });
    } else {
      this.flash.show('No ha Seleccionado una fecha', { cssClass: 'custom-alert-danger', timeout: 3000 })
    }
    
  }

  generarOrdenReparacion(content) {
    const orden = {
      entryDate: this.date,
      MechanicID: this.mecanico,
      AppointmentID: this.cita.ID
    };
    this.api.nuevaOrdenReparacion(orden).subscribe(data => {
      if (data.success) {
        const appointmentID = data.repairOrder.AppointmentID;
        const i = this.colaEspera.findIndex(element => element.ID === appointmentID);
        const vecAppointment = this.colaEspera.slice(i, i+1);
        this.colaEspera = this.colaEspera.slice(i,i+1);
        this.api.getOrdenesAbiertas().subscribe(data => {
          if(data.success) {
            this.ordenesActivas = data.activesOrders;
            this.modalService.open(content).close();
          } else {
            this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 5000 })
          }
        });
        this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 6000 });
      } else {
        this.flash.show(data.msg, { cssClas: 'custom-alert-danger', timeout: 6000 });
      }
    });
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

  cerrarOrden(ordenID) {
    console.log(ordenID);
    let d = new Date(Date.now());
    const datos = {
      id: ordenID,
      exitDate: {
        year: d.getFullYear(),
        month: d.getMonth()+1,
        day: d.getDay()
      }
    }
    this.api.cerrarOrden(datos).subscribe(data => {
      console.log(data);
      if(data.success){
        this.api.getOrdenesAbiertas().subscribe(data => {
          if(data.success) {
            this.ordenesActivas = data.activesOrders;
          } else {
            this.ordenesActivas = [];
          }
        });
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  historicoCliente(nationalID) {
    this.api.historicoCliente({ nationalID: nationalID }).subscribe(data => {
      if(data.success) {
        let blob = new Blob([data.csv], {type: 'text/plain'});
        if(window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob);
        } else {
          this.btn.nativeElement.href = window.URL.createObjectURL(blob);
          this.btn.nativeElement.download = "prueba.csv"
        }
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  historicoVehiculo(licensePlate) {
    this.api.historicoVehiculo({ licensePlate }).subscribe(data => {
      if(data.success) {
        let blob = new Blob([data.csv], {type: 'text/plain'});
        if(window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob);
        } else {
          this.btn.nativeElement.href = window.URL.createObjectURL(blob);
          this.btn.nativeElement.download = "reporte.csv"
        }
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  historicoMecanico(nationalID) {
    this.api.historicoVehiculo({ nationalID }).subscribe(data => {
      if(data.success) {
        let blob = new Blob([data.csv], {type: 'text/plain'});
        if(window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob);
        } else {
          this.btn.nativeElement.href = window.URL.createObjectURL(blob);
          this.btn.nativeElement.download = "reporte.csv"
        }
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  historicoModelo(model) {
    this.api.historicoVehiculo({ model }).subscribe(data => {
      if(data.success) {
        let blob = new Blob([data.csv], {type: 'text/plain'});
        if(window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob);
        } else {
          this.btn.nativeElement.href = window.URL.createObjectURL(blob);
          this.btn.nativeElement.download = "reporte.csv"
        }
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

}
