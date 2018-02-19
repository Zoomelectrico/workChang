import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

  vehiculos: Object = [
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

}


