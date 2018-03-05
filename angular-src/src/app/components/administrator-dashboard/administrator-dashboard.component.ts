import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-administrator-dashboard',
  templateUrl: './administrator-dashboard.component.html',
  styleUrls: ['./administrator-dashboard.component.css']
})
export class AdministratorDashboardComponent implements OnInit {
  // The Admin
  private admin: any;
  //Registrar usuario
  private nationalID: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private username: string;
  private password: string;
  private password2: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  
  roles: any[]= [
    {
      rolName: "Mecánico",
      type: 3
    },
    {
      rolName: "Administrador",
      type: 4
    },
    {
      rolName: "Gerente",
      type: 2
    }
  ]

  type: any = this.roles[1];

  //Registrar repuesto
  private partNumber: number;
  private name: string;
  private brand: string;
  private forModel: string;
  private partQuantity: number;

  constructor(
    private auth: AuthService,
    private router: Router,
    private api: ApiService
  ) {

   }

  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem('user')); // Guardo los datos del usuario
  }

  

  registrar() {
    if (this.password === this.password2) {
      const user = {
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
      }
      console.log(this.type.type);
      this.auth.registerUser(user).subscribe(data => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigate(['/login']);
        } else {
          console.log(data.msg);
          this.router.navigate(['/admin']);
        }
      });
    } else {
      //TODO: El alert de constraseña mala
    }
  }

  registrarRepuesto(){
    const repuesto = {
      partNumber: this.partNumber,
      name: this.name,
      brand: this.brand,
      forModel: this.forModel,
      inStock: this.partQuantity
    }
    this.api.registrarRepuesto(repuesto).subscribe(dataRes => {
      if (dataRes.success) {
        console.log("exitoo")
      } else {
        // Flash Message
      }
    });
  }


}
