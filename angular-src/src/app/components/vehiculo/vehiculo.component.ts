import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  public vehiculos:Observable<any[]>;

  private user: any;

  constructor(
    private api: ApiService
  ) {  
  }
 
  async ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); // Guardo los datos del usuario
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
        console.log(clientData.msg); // sino averiguo que fallo
      }
    });
  }

  pedirCita(serial) {
    console.log(serial);
    this.api.pedirCita({
      serial: serial
    }).subscribe(data => {
      if(data.success) {
        // Flash Message de todo cool
      } else {
        // Flash Message de todo mal 
      }
    });
  }

}


