import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'ig-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private personService : PersonService) { }

  ngOnInit() {
    this.personService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }

}
