import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './guard/auth.guard';
import { animation } from '@angular/animations';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
    {path : '', redirectTo: 'home', pathMatch: 'full', },
    {path : 'home', pathMatch: 'full', component : HomeComponent},
    {path : 'profile', component : ProfileComponent, canActivate: [authGuard]},
    {path : 'book/:id', component : BookComponent, canActivate: [authGuard]},
    {path : 'signin', component : SigninComponent},
    {path : '**', redirectTo: 'home'}
];
