import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css','./../../app.component.css']
})
export class ClientDashboardComponent implements OnInit {

  private brand: string;
  private model: string;
  private year: number;
  private licensePlate: string;
  private serial: string;
  private photoLink: string;

  constructor(
    private api: ApiService 
  ) { }

  ngOnInit() {
  
  }
  // Metodo asincrono_
  async registrarCarro() {
    // Subir la foto a un proovedor y recibir el link
    this.photoLink = ''; // await proovedor... 
    const car = {
      brand: this.brand,
      model: this.model,
      year: this.year,
      licensePlate: this.licensePlate,
      serial: this.serial,
      photoLink: this.photoLink
    };
    this.api.registrarCarro(car).subscribe(data => {
      if (data.success) {
        // actualizar la lista de carros
      } else {
        // mano fallo
      }
    });
  }

}
