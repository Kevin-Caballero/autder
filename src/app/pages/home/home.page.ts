import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ILaunch } from 'src/app/models/launch.interface';
import { IPeopleInSpacePerson } from 'src/app/models/people-in-space-person.interface';
import { IResponsePeopleInSpace } from 'src/app/models/people-in-space-response.interface';
import { IResponse } from 'src/app/models/response.interface';
import { IStatus } from 'src/app/models/status.interface';

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
    private httpClient: HttpClient,
    private router: Router
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
      }, 1000);
    });
  }

  getLaunchName(name: string) {
    return name?.split('|')[0]
  }

  selectLaunch(launch: ILaunch) {
    console.log(launch);
    this.router.navigate(['/launch-detail'], { state: { launch } })
  }

  getPeopleInSpace() {
    this.httpClient.get<IResponsePeopleInSpace>('http://api.open-notify.org/astros.json')
      .pipe(take(1))
      .subscribe((response: IResponsePeopleInSpace) => this.peopleInSpace = response.people)
  }

  getAliensInSpace() {
    this.aliensInSpace = Math.floor(Math.random() * 10) + 1;
  }

  getStatusColor(status: IStatus | undefined): { text: string, bgColor: string, textColor: string } {
    let textColor: string = 'var(--ion-color-primary)';
    let bgColor: string = 'var(--ion-color-tertiary)';
    let text: string = '';
    if (status)
      switch (status.name.toLowerCase()) {
        case 'to be determined':
        case 'to be confirmed':
          bgColor = 'var(--ion-color-warning-shade)';
          text = 'undefined';
          textColor = 'var(--ion-color-warning-contrast)';
          break;
        case 'launch successful':
          bgColor = 'var(--ion-color-success-shade)';
          text = 'successful';
          textColor = 'var(--ion-color-success-contrast)';
          break;
        case 'go for launch':
          bgColor = 'var(--ion-color-success-shade)';
          text = 'ready';
          textColor = 'var(--ion-color-success-contrast)';
          break;
        default:
          break;
      }
    return { text, bgColor, textColor };
  }
}
