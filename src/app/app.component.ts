import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  upperText = 'Mostra em maiscula';
  user: User = {
    name: 'Anderson',
    age: 22
  };
}
