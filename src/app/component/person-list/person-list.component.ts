import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/person';
import {PersonService} from '../../service/person.service';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";

@Component({
  selector: 'ig-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  isBookLoading: boolean = true;

  books: Book[] = [];

  constructor(private personService: PersonService,
              private bookService: BookService) {
  }

  ngOnInit() {
    this.personService
      .getAll()
      .subscribe(
        /* happy path */ p => this.people = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);

    this.bookService
      .getAll()
      .subscribe(bs => this.books = bs,
        e => this.errorMessage = e,
        () => this.isBookLoading = false);
  }

}
