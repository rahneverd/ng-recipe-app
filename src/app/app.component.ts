import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-recipe-app';
  display = 'recipes'
  toBeDisplayed(data) {
    this.display = data
    console.log(data)
  }
}
