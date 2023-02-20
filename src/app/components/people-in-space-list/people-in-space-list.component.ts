import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-in-space-list',
  templateUrl: './people-in-space-list.component.html',
  styleUrls: ['./people-in-space-list.component.scss'],
})
export class PeopleInSpaceListComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() { }

}
