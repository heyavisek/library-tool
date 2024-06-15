import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { Router } from 'express';


export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    return true;
  }else{
    authService.login();
    return false;

  }
};
