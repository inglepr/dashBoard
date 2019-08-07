import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private snackbar:MatSnackBar,private router: Router) {}

  
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    this.snackbar.open("logout successfully...","close",{duration:2500})
    console.log("Succcessfulyl logged out");
    this.router.navigateByUrl('/dashboard');

  }}
