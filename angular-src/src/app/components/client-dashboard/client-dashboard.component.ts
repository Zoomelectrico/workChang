import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css','./../../app.component.css']
})
export class ClientDashboardComponent implements OnInit {

  private cars:Array<any>; 
  
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
      photoLink: this.photoLink,
      active: true,
      OwnerID: 1 // Traerse el ID del LocalStorage
    };
    this.api.registrarCarro(car).subscribe(data => {
      if (data.success) {
        this.cars.push(data.car);
      } else {
        // mano fallo
      }
    });
  }

}
