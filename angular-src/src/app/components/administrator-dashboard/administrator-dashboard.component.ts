import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-administrator-dashboard',
  templateUrl: './administrator-dashboard.component.html',
  styleUrls: ['./administrator-dashboard.component.css']
})
export class AdministratorDashboardComponent implements OnInit {
  // Usuario
  private user;
  // Vector de Roles
  private roles = [{ nombre: 'Gerente', type: 2 }, { nombre: 'Mecánico', type: 3 }, { nombre: 'Administrador', type: 4 }];
  // Datos del nuevo empleado
  private firstName: string;
  private lastName: string;
  private nationalID: number;
  private email: string;
  private username: string;
  private password: string;
  private password2: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private type: number;
  private photo: any;
  // Vector de Respuestos

  //

  constructor(
    private auth: AuthService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.type = 2;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  registrarEmpleado() {
    const photoURL = ''; //Provedor
    if (this.password === this.password2) {
      const user = {
        photoURL: photoURL,
        nationalID: this.nationalID,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        city: this.city,
        type: this.type
      };
      this.auth.registerUser(user).subscribe(data => {
        if (data.success) {
          this.nationalID = 0;
          this.firstName = '';
          this.lastName = '';
          this.email = ''
          this.username = ''; 
          this.password = '';
          this.password2 = ''; 
          this.addressLine1 = '';
          this.addressLine2 = '';
          this.city = '';
          // Flash Todo Beio
        } else {
          console.log(data.msg);
          // Mano la cagamos
        }
      })
    } else {
      // Las contraseñas no coinciden vv
    }
  }

  onChange(rol) {
    this.type = rol;
  }
  
}
