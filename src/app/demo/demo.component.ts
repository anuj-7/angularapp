import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  
  addtofood(value) {
    // foodevent is nothing but your custom event (foodevent)
        this.foodevent.emit(value);
      }
    
  constructor() { }

  ngOnInit() {
  }

}
