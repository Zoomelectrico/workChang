import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from '../../services/api.service';
import { UploadImgService } from '../../services/upload-img.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css', './../../app.component.css']
})
export class ClientDashboardComponent implements OnInit {
  // The Client
  private user: any;
  private car: any;
  // The ngModel for the Form
  private brand: string;
  private model: string;
  private year: number;
  private licensePlate: string;
  private serial: string;
  private photoLink: any;
  private photo: File;
  // Vector de Vehiculos
  private vehiculos = [];
  // vector de citas
  private citas = [];


  constructor(
    private api: ApiService,
    private flash: FlashMessagesService,
    private img: UploadImgService,
    private modal: NgbModal
  ) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); // Guardo los datos del usuario
    this.resolverVehiculos();
    this.resolverCitasPedidas();
  }

  // Funciones utilizadas Varias veces

  resolverVehiculos() {
    this.api.buscarCliente({
      userID: this.user.ID
    }).subscribe(clientData => { // Busco al cliente 
      if (clientData.success) { // Pregunto si tuve exito
        this.api.buscarCarros({
          OwnerID: clientData.client.ID
        }).subscribe(cars => { // Si lo tuve busco los carros de eso cliente
          this.vehiculos = cars; // Como es un observable asigno directamente
        });
      } else {
        this.flash.show(clientData.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  resolverCitasPedidas() {
    this.api.getCitasPedidas(this.user.ID).subscribe(data => {
      if (data.success) {
        this.citas = data.appoiments;
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  onChange(evt) {
    this.img.loadImg(evt.target.files[0]).then(algo => {
      this.photoLink = algo;
    }).catch(err => console.log(err));
  }

  registrarCarro() {

    if (this.photoLink &&
      this.brand.length < 45 && this.brand &&
      this.model.length < 45 && this.model &&
      this.year>0 && this.year<3000 &&
      this.licensePlate.length < 7 && this.licensePlate &&
      this.serial.length<255 && this.serial    
    ){
        const car = {
        brand: this.brand,
        model: this.model,
        year: this.year,
        licensePlate: this.licensePlate,
        serial: this.serial,
        photoLink: this.photoLink,
        active: true,
        OwnerID: 0
      };
      this.api.buscarCliente({
        userID: this.user.ID
      }).subscribe(data => {
        console.log(data);
        if (data.success) {
          car.OwnerID = data.client.ID;
          this.api.registrarCarro(car).subscribe(dataCar => {
            if (dataCar.success) {
              this.vehiculos.push(dataCar.car);
              this.flash.show("Vehículo registrado correctamete", { cssClass: 'custom-alert-success', timeout: 3000 })
              this.brand = '';
              this.model = '';
              this.year = null;
              this.licensePlate = '';
              this.serial = '';
              this.photoLink = '';
            } else {
              this.flash.show(dataCar.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
          });
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
      });

    } else {
      this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }



  }

  desactivar(serial) {
    if (serial) {
      this.api.desactivarVehiculo({ carSerial: serial }).subscribe(data => {
        if (data.success) {
          this.resolverVehiculos();
          this.resolverCitasPedidas();
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
      });
    } else {
      this.flash.show('Upsss... Hemos tenido un error :(', { cssClass: 'custom-alert-danger' })
    }
  }

  verHistorial(serial) {
    let i = this.vehiculos.findIndex(c => c.serial === serial);
    const licensePlate = this.vehiculos[i].licensePlate;
    this.api.historicoVehiculo({ licensePlate: licensePlate }).subscribe(data => {
      if (data.success) {
        // Pajita
      } else {
        // Pajita
      }
    });
  }

  pedirCita(serial) {
    this.api.pedirCita({
      serial: serial
    }).subscribe(data => {
      if (data.success) {
        this.resolverCitasPedidas();
        this.flash.show('Su solicitud de cita fue elaborada de manera correcta', { cssClass: 'custom-alert-success', timeout: 3000 });
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger' });
      }
    });
  }

  verVehiculo(serial, content) {
    let i = this.vehiculos.findIndex(c => c.serial === serial);
    this.car = this.vehiculos[i];
    this.modal.open(content);
  }

}
