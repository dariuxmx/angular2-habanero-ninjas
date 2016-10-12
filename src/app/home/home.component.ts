import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to Habanero Ninja Directory";
  @Input() ninja;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  };

constructor() {
  console.log('Default method to be run when component is being constructed');
}

  ngOnInit() {
    console.log('Called when component is initializated');
  }

}
