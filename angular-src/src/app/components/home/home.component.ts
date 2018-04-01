import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './../../app.component.css']
})

export class HomeComponent implements OnInit {

  public name;
  public email;
  public msg;

  constructor(
    private router: Router,
    private api: ApiService,
    private flash: FlashMessagesService
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

  contactar() {
    console.log('aja')
    const email = {
      email: this.email,
      msg: this.msg,
      name: this.name
    };
    this.api.contactEmail(email).subscribe(data => {
      console.log('eje')
      if(data.success) {
        this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
        this.email = '';
        this.msg = '';
        this.name = '';
      } else { 
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }


  
}
