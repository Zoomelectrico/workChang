import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mechanic-dashboard',
  templateUrl: './mechanic-dashboard.component.html',
  styleUrls: ['./mechanic-dashboard.component.css']
})
export class MechanicDashboardComponent implements OnInit {
  private user: any;
  private ordenes = [];


  constructor(
    private api: ApiService 
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); // Guardo los datos del usuario
    console.log(this.user.ID + " " + this.user.firstName);
    this.getOrder(this.user);
  }

  getOrder(user){
    this.api.getOrdenes(user.ID).subscribe(data => {
      if(data.success) {
        this.ordenes = data.repairOrders;
        console.log("ordenNro" + this.ordenes[0].ID);
      } else {
        //this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.ordenes = [];
      }
    });
  }

}
