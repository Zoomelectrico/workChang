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
    this.user = await JSON.parse(localStorage.getItem('user'));
    const clientID = await this.api.buscarCliente(this.user.ID); 
    this.api.buscarCarros({
      ClientID: clientID
    }).subscribe(data => {
      this.vehiculos = data.cars;
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

}


