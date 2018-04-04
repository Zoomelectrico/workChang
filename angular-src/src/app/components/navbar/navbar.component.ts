import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private type: number;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) {
      this.type = 0;
    } else {
      this.type = user.type
    }
  }

  ngAfterContentChecked(){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) {
      this.type = 0;
    } else {
      this.type = user.type
    }
  }

  isClient(){
    return this.type === 1;
  }

  isManager() {
    return this.type === 2;
  }

  isMechanic () {
    return this.type === 3;
  }

  isAdmin () {
    return this.type === 4;
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/']);
  }

}
