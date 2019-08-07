import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { LabelService } from 'src/app/service/label.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {


  constructor(private snackbar:MatSnackBar,private dataservice:DataService,private noteservice:NoteserviceService,private labelservice:LabelService) { }
  labelsList:any;
  noteLabelsList:any;
  message:any;
  ngOnInit() {
   
  }

  colors=[
    [
      {colorName:"white",colorCode:'#FFFFFF'},
      {colorName:'green',colorCode:'#008000'},
      {colorName:'grey',colorCode:'#808080'}
    ],
    [
      {colorName:'indian red',colorCode:'#CD5C5C'},
      {colorName:'crimson',colorCode:'#DC143C'},
      {colorName:'yellow',colorCode:'#FFFF00'}
    ],
    [
      {colorName:'Purple',colorCode:'#800080'},
      {colorName:'Teal',colorCode:'#008080'},
      {colorName:'light blue',colorCode:'#ADD8E6'}
    ]
  ]

  @Input() noteInfo:any

    onTrash()
    {
     
      this.noteservice.getRequest("noteservice/trashandUntrash?noteId="+this.noteInfo.noteId).subscribe
      (
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.dataservice.changeMessage("trash")
            this.snackbar.open("note is trashed","close",{duration:2500})
          }
          else
          {
            this.snackbar.open("note is untrashed","close",{duration:2500})
          }
        }
      )
    }
    onArchive()
    {
      this.noteservice.getRequest("noteservice/archiveandUnarchive?noteId="+this.noteInfo.noteId).subscribe(
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.dataservice.changeMessage("archive");
            this.snackbar.open(response.statusMessage,"close",{duration:2500})
          }
          else if(response.statuscode==200 && !this.noteInfo.noteId==false)
          {
            this.snackbar.open("note is archived","close",{duration:2500})
          }
        }
      )
      
    }
  
    getLabels()
    {
      this.labelservice.getRequest("labelservice/labels").subscribe(
        (data:any):any=>
        {
         this.labelsList=data;
         console.log(data) ;
        }
      )
    }
    addLabeltoNote(label:any)
    {
      this.labelservice.getRequest("labelservice/addlabel?labelId="+label.labelId+"&noteId="+this.noteInfo.noteId).subscribe(
        (respose:any):any=>
        {
          if(respose.statuscode==200)
          {
            this.dataservice.changeMessage("addlabel")
            this.snackbar.open("label added to note ","close",{duration:2500});
          }
          else
          {
            this.snackbar.open("please check fields...","close",{duration:2500});
          }
        }
      )
    }
    getLabelsOfNotes()
    {
      this.noteservice.getRequest("noteservice/getLabelOfNotes?noteId="+this.noteInfo.noteId).subscribe(
        (data:any):any=>
        {
          this.noteLabelsList=data;
          console.log("noteLabelsList  ==>"+this.noteLabelsList);
          

        }
      )
    }
    removeLabel(labels:any)
    {
      this.labelservice.postRequest("labelservice/removelabel?labelId="+labels.labelId+"&noteId="+this.noteInfo.noteId,'').subscribe
      (
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.dataservice.changeMessage("removelabel")
            this.snackbar.open("label removed from note","close",{duration:2500});
          }
          else
          {
            this.snackbar.open("Please check fields....","close",{duration:2500});
          }
        }
      )
    }
    onColor(color:any)
    {
      console.log("color ==>",color);
      
      this.noteservice.putRequest("noteservice/color?noteId="+this.noteInfo.noteId+"&colorCode="+color,'').subscribe(
        (response:any):any=>
        {
          if(response.statuscode)
          {
            this.dataservice.changeMessage("color")
            this.snackbar.open("color set to note","close",{duration:2500});
          }
        }
      )
    }
    
}


