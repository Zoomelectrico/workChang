import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService implements CanActivate{

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    return true;
  }  

}
