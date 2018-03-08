import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  
  }

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    }

    this.auth.login(credentials).subscribe(data => {
      if (data.success) {
        this.auth.storeUserData(data.token, data.user);
        switch(data.user.type) {
          case 1:
            this.router.navigate(['/client']);
            break;
          case 2:
            this.router.navigate(['/Manager']);
            break;
          case 3:
            this.router.navigate(['/Mechanic']); //Mecanico
            break;
          case 4:
            this.router.navigate(['/Admin']); // Administrador
            break;
          default:
            this.router.navigate(['/']);
        }
        
      } else {
        this.router.navigate(['/login']);
      } 
    });
  }

}
  