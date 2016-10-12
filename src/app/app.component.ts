import { Component } from '@angular/core';
import { HomeComponent } from './home/index';

@Component({
  //Root component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*
  Child components
  Add header component*/
  directives: [HomeComponent]
})
export class AppComponent {
  title = 'app works!';
  name = 'Habanero Ninja';
}
