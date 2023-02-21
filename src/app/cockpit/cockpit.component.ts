import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ExplainVerbosity } from 'mongodb';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  ngOnInit(): void {
  }
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer(nameInput:HTMLInputElement) {
    // console.log(nameInput.value)
    console.log('the serverContentInput',this.serverContentInput);
   this.serverCreated.emit({serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value})
  }
}
