import { Component, OnInit, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Note } from 'src/app/model/note';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'  
})

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor(private snackbar:MatSnackBar, private noteservice:NoteserviceService,private router:Router) { }
  showAddNote:boolean
  note:Note=new Note();
  createForm:FormGroup;
 
  ngOnInit() {
    this.showAddNote=false;
    this.createForm=new FormBuilder().group(
      {
        "title":new FormControl(this.note.title,Validators.required),
        "description":new FormControl(this.note.description,Validators.required)
      }
    )
  }

  showBar()
  {
    this.showAddNote=true
  }
  close()
  {
    console.log(this.createForm.value)
      
      if(this.createForm.value!=null)
      {
      this.noteservice.createNote("user/note/create",this.createForm.value).subscribe(
        (response:any):any=>
        {
          console.log(response)
         // this.snackbar.open('note created sucess...');
          if(response.statusCode==201)
          {
            console.log(response)
            this.snackbar.open("note created","close",{duration :2500})
          }
          else
          {console.log(response)
            this.snackbar.open("note not created ","close",{duration:2500})
          }
        }
      )
      this.showAddNote=false;
      }else
      {
        this.snackbar.open("please enter titlel and description","open",{duration:25000})






      }
    }
  
}


