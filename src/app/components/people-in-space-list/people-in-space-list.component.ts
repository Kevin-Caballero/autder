import { Component, Input, OnInit } from '@angular/core';
import { IPeopleInSpacePerson } from 'src/app/models/people-in-space.interface';
import { IAstronaut } from 'src/app/models/the-space-devs';

@Component({
  selector: 'app-people-in-space-list',
  templateUrl: './people-in-space-list.component.html',
  styleUrls: ['./people-in-space-list.component.scss'],
})
export class PeopleInSpaceListComponent implements OnInit {

  peopleInSpace: IAstronaut[] = [];

  constructor() { }

  ngOnInit() { }

  showDetail(astronaut: IAstronaut) {
    console.log(astronaut);

  }
}
