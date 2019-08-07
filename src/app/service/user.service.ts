import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpService: HttpService = new HttpService(this.httpclient, this.router);
  baseUrl1 = environment.baseUrl;
  constructor(
    private httpclient: HttpClient,
    private router: Router
  ) { }

  public userLogin(data) {

    return this.httpService.postRequest("user/login", data);
  }

  public registerUser(data) {
    return this.httpService.postRequest("user/register", data);
  }

  public sendResetLink(data) {
    return this.httpService.getRequest(data);
  }

  public passwordReset(data) {
    return this.httpService.getRequest(data);
  }
 
  public forgotUser(data) {
    return this.httpService.getRequest(data);
}}