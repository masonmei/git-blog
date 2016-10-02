import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Person } from '../../model/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'ig-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  sub: any;
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

  constructor(private personService: PersonService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting person with id: ', id);
          this.personService
            .get(id)
            .subscribe(p => this.person = p);
        });
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  gotoPeoplesList(){
      let link = ['/persons'];
      this.router.navigate(link);
  }

  savePersonDetails(){
    this.personService
        .save(this.person)
        .subscribe(
          (r: Response) => {console.log('success');}
        );
  }
}
