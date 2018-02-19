import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerente-dashboard',
  templateUrl: './gerente-dashboard.component.html',
  styleUrls: ['./gerente-dashboard.component.css', './../../app.component.css']
})
export class GerenteDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model;

  mecanicos: Object = [
    {
      nombre: "Juan Perez",
      cedula: 20000000,
      sexo: "masculino",
      telefono: "04245555555",
      direccion: "av. Lecuna, Caracas, Venezuela",
      correo: "juanmeca@mecanicospati.tu",
      especialidad: "tren delantero",
      fechaContrato: "26/09/2015"
    }
  ]

  clientes: Object = [
    {
      nombre: "Pepe Perez",
      cedula: 26666666,
      sexo: "masculino",
      telefono: "04245555555",
      direccion: "av. Lecuna, Caracas, Venezuela",
      correo: "pepito@perez.pepe",
      registrados: 3,
      taller: 1
    }
  ]

  solicitudes: Object = [
    { 
      numSol: 1,
      cliente: "Pepe Pérez",
      cedula: 26666666,
      fechaSol: "16/02/2018",
      fechaEsp: "26/02/2018",
      motivo: "sonido al frenar."
    }
  ]

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
