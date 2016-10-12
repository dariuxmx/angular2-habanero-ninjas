import { Component } from '@angular/core';
import { HomeComponent } from './home/index';
//import { DirectoryComponent } from './directory/index';
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  //Root component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // Deprecated
  //directives: [HomeComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'app works!';
  name = 'Habanero Ninja';

  ninja = {
    name: "Marcus Fenix",
    belt: "Black"
  }

  yell(e){
    alert("I am yelling");
    console.log(e);
  }

}
