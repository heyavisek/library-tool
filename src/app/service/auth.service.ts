import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isAuthenticated(): boolean {
    const toekn = localStorage.getItem('token')
    return toekn !== null
  }

  logout(){
    localStorage.removeItem('token')
  }

  login(){
    inject(Router).navigate(['/signin'])
  }
}
