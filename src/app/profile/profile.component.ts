import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileName: string = 'Random Name'

  constructor(private router: Router, private authService: AuthService){
  }

  onInit(){
    if(!this.authService.isAuthenticated())
      this.router.navigate(['/signin'])
  }
  

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/home'])
  }

}


/*

display name
select language
log out
change password

*/