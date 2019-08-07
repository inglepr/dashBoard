import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fundooTitle = 'Fundoo';

  constructor(private router: Router

  ) { }

  ngOnInit() { }

  onRefresh() {
    
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getNotes() {
    this.router.navigate(['/dashboard/createnote']);
  }

  onReminder() {
    alert("Reminder Notes");
  }

  onEditLabel() {
    alert("EditLabel for Notes");
  }

  onArchive() {
    alert("Archieve Notes are Here");
  }

  onDelete() {
    alert("trash notes are here");
  }

}
