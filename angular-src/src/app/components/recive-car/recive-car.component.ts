import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-recive-car',
  templateUrl: './recive-car.component.html',
  styleUrls: ['./recive-car.component.css']
})
export class ReciveCarComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    
  }

  aceptarVehiculo() {
    
  }

}
 