import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-display',
  templateUrl: './label-display.component.html',
  styleUrls: ['./label-display.component.scss']
})
export class LabelDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() noteData:any;

}
