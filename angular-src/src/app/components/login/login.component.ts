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
        console.log(data.token);
        console.log(data.user);
        this.router.navigate(['/client']);
      } else {
        this.router.navigate(['/login']);
      } 
    });
  }

}
 