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
  private diagnostico
  private procedimiento
  private repUsados
  private repNecesarios
  
  constructor(
    private api: ApiService 
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); // Guardo los datos del usuario
    console.log(this.user.ID + " " + this.user.firstName);
    this.getOrder(this.user);
  }

  getOrder(user){
    this.api.getOrdenes(user).subscribe(data => {
      if(data.success) {
        this.ordenes = data.repairs;
        console.log("ordenNro" + data.repairs[0].ID);
      } else {
        //this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.ordenes = [];
      }
    });
  }

}
