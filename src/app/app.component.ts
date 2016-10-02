import { Component } from '@angular/core';
import {PersonService} from './service/person.service';
import {BookService} from "./service/book.service";

@Component({
  selector: 'ig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PersonService, BookService]
})
export class AppComponent {
  title = 'app works!';
}
