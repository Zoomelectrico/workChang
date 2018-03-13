import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mechanic-dashboard',
  templateUrl: './mechanic-dashboard.component.html',
  styleUrls: ['./mechanic-dashboard.component.css']
})
export class MechanicDashboardComponent implements OnInit {
  private user: any;


  constructor(
    private api: ApiService 
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); // Guardo los datos del usuario
  }

}
