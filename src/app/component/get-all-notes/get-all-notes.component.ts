import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  constructor(private noteservice: NoteserviceService, private snackbar: MatSnackBar,
    private dialog:MatDialog) { }

  noteList: any;
  ngOnInit()  {
    this.getNote();
  }
 

  getNote() {
    this.noteservice.getAllNotes("user/note/getAllNotes").subscribe(
      data => {
        this.noteList= data;
        console.log('get all note ==>', data);
      }
    )
  }
  openDialog(note:any)
  {
    const ref=this.dialog.open(UpdateNoteComponent,{
      
      width:"458px",
      height:"259px",
      
      data:{
        noteId:note.noteId,
        title:note.title,
        description:note.description
      }
    })
  }



}
