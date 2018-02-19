import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden-reparacion',
  templateUrl: './orden-reparacion.component.html',
  styleUrls: ['./orden-reparacion.component.css']
})
export class OrdenReparacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ordenes: object= [
    {
      numeroOrden: 1,
      cliente: "Pepito Perez",
      cedula: 26666666,
      marca: "Audi",
      modelo: "TT",
      anio: 2016,
      placa: "AA000AA",
      serial: "1G1YY25R695700001",
      estado: "Revisión",
      mecanico: "Juan Pérez",
      fechaIngreso: "16/02/2018",
      accesorios: "tranca palanca",
      repuestos: "-",
      razon: "Sonido inusual al cambiar a la 3era velocidad",
      diagnostico: "-",
      procedimiento: "-",
      img1: "../../../assets/escalade.jpg",
      img2: "../../../assets/escalade.jpg",
      img3: "../../../assets/escalade.jpg"
    },
    {
      numeroOrden: 2,
      cliente: "Pepito Perez",
      cedula: 26666666,
      marca: "Chevrolet",
      modelo: "Cruize",
      anio: 2015,
      placa: "AA000AA",
      serial: "1G1YY25R695700001",
      estado: "Revisión",
      mecanico: "Juan Pérez",
      fechaIngreso: "16/02/2018",
      accesorios: "triangulo de seguridad",
      repuestos: "-",
      razon: "Sonido de frenos",
      diagnostico: "-",
      procedimiento: "-",
      img1: "../../../assets/escalade.jpg",
      img2: "../../../assets/escalade.jpg",
      img3: "../../../assets/escalade.jpg"
    },
    {
      numeroOrden: 3,
      cliente: "Pepito Perez",
      cedula: 26666666,
      marca: "Audi",
      modelo: "TT",
      anio: 2016,
      placa: "AA000AA",
      serial: "1G1YY25R695700001",
      estado: "Revisión",
      mecanico: "Juan Pérez",
      fechaIngreso: "16/02/2018",
      accesorios: "tranca palanca",
      repuestos: "-",
      razon: "Sonido inusual al cambiar a la 3era velocidad",
      diagnostico: "-",
      procedimiento: "-",
      img1: "../../../assets/escalade.jpg",
      img2: "../../../assets/escalade.jpg",
      img3: "../../../assets/escalade.jpg"
    }
  ]

}
