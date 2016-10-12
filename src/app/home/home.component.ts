import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to Habanero Ninja Directory";
  @Input() ninja;
  /*myString = "I like habaneros";
  myBoolean = true;

  ninja = {
    name: "Marcus Fenix",
    belt: "Black"
  }

  alertMe(val){
    alert(val);
  }
  */


  constructor() { }

  ngOnInit() {
  }

}
