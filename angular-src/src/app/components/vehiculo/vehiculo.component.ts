import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  public vehiculos:Array<any>;

  constructor(
    private api: ApiService,
    private elRef:ElementRef
  ) {  
  }

  ngOnInit() {
    this.api.buscarCarros({
      ClientID: 1
    }).subscribe(data => {
      this.vehiculos = data.cars;
      console.log(this.vehiculos);
    });
  }

  pedirCita(serial) {
    console.log(serial);
    this.api.pedirCita({
      serial: serial
    }).subscribe(data => {
      console.log(data);
    });
  }

  /*vehiculos: Object = [
    {
      marca: "Audi",
      modelo: "TT",
      anio: "2016",
      duenio: "Pepe",
      placa: "AA000AA",
      color: "plata",
      imagen: "../../../assets/audiTT.JPG"
    },
    {
      marca: "Audi",
      modelo: "TT",
      anio: "2016",
      duenio: "Pepe",
      placa: "AA000AA",
      color: "plata",
      imagen: "../../../assets/audiTT.JPG"
    },
    {
      marca: "Audi",
      modelo: "TT",
      anio: "2016",
      duenio: "Pepe",
      placa: "AA000AA",
      color: "plata",
      imagen: "../../../assets/audiTT.JPG"
    }
  ]
  */
}


