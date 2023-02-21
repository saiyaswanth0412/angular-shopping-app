import { Component, 
  Input, 
  OnChanges,
   OnInit, 
   SimpleChanges, 
   ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit,OnChanges {
  //' ' we use '' in input as alias 
 @Input('srvElement') element:{type:string,name:string,content:string};

  constructor() {
  console.log('constructor called!');
   }

  ngOnInit(): void {
    console.log('ngOnit called!')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
