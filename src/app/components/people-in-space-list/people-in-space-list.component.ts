import { Component, Input, OnInit } from '@angular/core';
import { IPeopleInSpacePerson } from 'src/app/models/people-in-space.interface';

@Component({
  selector: 'app-people-in-space-list',
  templateUrl: './people-in-space-list.component.html',
  styleUrls: ['./people-in-space-list.component.scss'],
})
export class PeopleInSpaceListComponent implements OnInit {

  peopleInSpace: IPeopleInSpacePerson[] = [];

  constructor() { }

  ngOnInit() {
    console.log('peopleInSpace: ', this.peopleInSpace);
  }

}
