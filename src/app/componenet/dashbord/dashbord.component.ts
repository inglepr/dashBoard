import { Component, OnInit } from '@angular/core';
//import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  email:any;
  token:any;

  fundooTitle = 'fundoonote';

  constructor(private router:Router) { }
   
  ngOnInit() {
    this.token=localStorage.getItem('token')
    this.email=localStorage.getItem('emailId')
    console.log(this.token)
    console.log(this.email)  
  }
  onRefresh(){
    window.location.reload();
  }
  onlogout(){
    localStorage.clear();
     this.router.navigate(['/login']);
  }

  onNotes(){
    alert("Notes are here");

  }

  onReminder(){
    alert("Reminder Notes");

  }

  onEditLabel(){
    alert("EditLabel for Notes");

  }

  onArchive(){
    alert("Archieve Notes are Here");

  }

  onDelete(){
    alert("trash notes are here");

  }


}
