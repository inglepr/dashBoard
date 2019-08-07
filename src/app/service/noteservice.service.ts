import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  baseUrl=environment.baseUrl;
  constructor(private httpclient : HttpClient) { }

public createNote(url:any, data:any){
  
  return this.httpclient.post(this.baseUrl+url,data,{headers:new HttpHeaders().set("token",localStorage.getItem("token"))});
}

getAllNotes(url:any){
return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("token",localStorage.getItem("token"))})
}

updateNote(url:any,data:any){
  return this.httpclient.put(this.baseUrl+url,data,{headers:new HttpHeaders().set("token",localStorage.getItem("token"))})
}
public putRequest(url:any,data:any)
{
  return this.httpclient.put(this.baseUrl+url,data,{headers:new HttpHeaders().set("token",localStorage.getItem("token"))})
}
public getRequest(url:any)
{
  return this.httpclient.get(this.baseUrl+url,{headers: new HttpHeaders().set("token",localStorage.getItem("token"))});
}

  


}
