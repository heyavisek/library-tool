import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  authenticated : boolean = localStorage.getItem('authenticated') !== null && localStorage.getItem('authenticated') === 'true'
  username: string = ''
  password: string = ''

  constructor(private routes: Router){
  }

  onInit(){
    if(!this.authenticated)
      this.routes.navigate(['/signin'])
  }


  onLogin(){
    const token = '1234567890'
    if (this.username === 'admin' && this.password === 'admin'){
      localStorage.setItem('token', token)
      this.routes.navigate(['/home'])
    }else{
      alert('Invalid credentials')
    }
  }

}
