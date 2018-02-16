import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


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
  ) { }

  ngOnInit() {
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
        type: 1
      }
      console.log(user);
      this.auth.registerUser(user).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/client/register']);
        }
      });
    } else {
      //TODO: El alert de constraseña mala
    }
  }
}
