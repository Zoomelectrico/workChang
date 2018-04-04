import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
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
    private router: Router,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {

  }

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    }
    if (!credentials.username) {
      this.flash.show("Recuerde completar todos los campos", { cssClass: 'custom-alert-danger', timeout: 3000 });
    }
    else {
      this.auth.login(credentials).subscribe(data => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.flash.show('¡Bienvenido de nuevo! ' + this.username.toUpperCase(), { cssClass: 'custom-alert-success', timeout: 3000 });
          switch (data.user.type) {
            case 1:
              this.router.navigate(['/client']);
              break;
            case 2:
              this.router.navigate(['/manager']);
              break;
            case 3:
              this.router.navigate(['/mechanic']);
              break;
            case 4:
              this.router.navigate(['/admin']);
              break;
            default:
              this.router.navigate(['/']);

          }
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
