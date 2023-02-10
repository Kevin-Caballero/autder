import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ILaunch } from 'src/app/models/launch.interface';
import { IPeopleInSpacePerson } from 'src/app/models/people-in-space-person.interface';
import { IResponsePeopleInSpace } from 'src/app/models/people-in-space-response.interface';
import { IResponse } from 'src/app/models/response.interface';

@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nextLaunches: ILaunch[] = [];
  loading: boolean = false;
  categories: string[] = [];
  peopleInSpace: IPeopleInSpacePerson[] = [];
  aliensInSpace: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    // this.getNextLaunches();
    this.getNextLaunchesMock();
    this.getPeopleInSpace();
    this.getAliensInSpace();
  }

  getNextLaunches() {
    this.loading = true;
    this.httpClient.get<IResponse<ILaunch>>('https://ll.thespacedevs.com/2.2.0/launch/upcoming/')
      .pipe(take(1))
      .subscribe((res: IResponse<ILaunch>) => {
        this.nextLaunches = res.results;
        console.log(this.nextLaunches);
        this.loading = false;
      });
  }

  getNextLaunchesMock() {
    this.loading = true;
    this.httpClient.get<IResponse<ILaunch>>('assets/api-mock-data/next-launches-mock.json').subscribe((res) => {
      setTimeout(() => {
        this.nextLaunches = res.results;
        console.log(this.nextLaunches);
        this.loading = false;
      }, 3000);
    });
  }

  getLaunchName(name: string) {
    return name?.split('|')[0]
  }

  selectLaunch(launch: ILaunch) {
    console.log(launch);
  }

  getPeopleInSpace() {
    this.httpClient.get<IResponsePeopleInSpace>('http://api.open-notify.org/astros.json')
      .pipe(take(1))
      .subscribe((response: IResponsePeopleInSpace) => this.peopleInSpace = response.people)
  }

  getAliensInSpace() {
    this.aliensInSpace = Math.floor(Math.random() * 100) + 1;
  }
}
