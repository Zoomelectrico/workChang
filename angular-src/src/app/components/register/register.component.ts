import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  constructor(
    private auth: AuthService,
    private router: Router,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {
  }
   
  registrar() {

    if(this.nationalID &&
  !this.firstName &&
  !this.lastName &&
  !this.email&&
  !this.username&&
  !this.password&&
  !this.addressLine1&&
  !this.addressLine2&&
  !this.city)
      {
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
        type: 1
      }
      this.auth.registerUser(user).subscribe(data => {
        if (data.success) {
          this.flash.show('Cliente Registrado con Éxito', { cssClass: 'custom-alert-success', timeout: 3000 });
          this.router.navigate(['/login']);
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
          // this.router.navigate(['/client/register']);
        }
      });
    } else {
      this.flash.show('Las contraseñas no coinciden', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }}else{
      this.flash.show('Recuerda completar todos los campos correctamente', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }
  }
}
