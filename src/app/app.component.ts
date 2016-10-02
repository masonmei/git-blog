import { Component } from '@angular/core';
import {PersonService} from './service/person.service';

@Component({
  selector: 'ig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PersonService]
})
export class AppComponent {
  title = 'app works!';
}
