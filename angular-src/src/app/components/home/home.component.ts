import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './../../app.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const type = parseInt(user.type);
      switch(type)  {
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
      
    } 
  }

}
