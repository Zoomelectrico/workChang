import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  // Los datos del usuario
  private user: any;
  // Los datos de las citas pautadas
  private colaEspera = [];
  //
  private ordenesActivas = [];
  // 
  private firstName: string;
  private lastName: string;
  private nationalID: number;
  private email: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private photoURL: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    
    // this.user = JSON.parse(localStorage.getItem('user'));
    this.user = {
      firstName: 'Jose'
    };
    this.colaEspera = [
      {
        brand: 'Chevrolet',
        model: 'Aveo',
        licensePlate: 'aa000aa'
      },
      {
        brand: 'Ford',
        model: 'Explorer',
        licensePlate: 'AAA000AA'
      }
    ];
    this.ordenesActivas = [
      {
        mechanicName: 'Germano Rojas',
        car: {
         name: 'Jeep Cherokee',
         licensePlate: 'AA00AA' 
        }
      },
      {
        mechanicName: 'Germano Rojas',
        car: {
         name: 'Chevrolet Aveo',
         licensePlate: 'AA00AA' 
        }
      },
      {
        mechanicName: 'Germano Rojas',
        car: {
         name: 'For Explorer',
         licensePlate: 'AA00AA' 
        }
      }
    ];
  }

  buscarCedula() {
    this.firstName = "Jose";
  }


}
