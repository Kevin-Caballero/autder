import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs';
import { PeopleInSpaceListComponent } from 'src/app/components/people-in-space-list/people-in-space-list.component';
import { IPeopleInSpacePerson, IResponsePeopleInSpace } from 'src/app/models/people-in-space.interface';
import { ILaunch, IResponse, IStatus } from 'src/app/models/the-space-devs';
import { BusinessOperationsService } from 'src/app/services/business-operations/business-operations.service';

@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nextLaunches: ILaunch[] = [];
  loading: boolean = false;
  categories: string[] = [];
  peopleInSpaceRaw: IPeopleInSpacePerson[] = [];
  aliensInSpace: number | undefined;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private bo: BusinessOperationsService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // this.getNextLaunches();
    this.getNextLaunchesMock();
    this.getPeopleInSpace();
    this.getAliensInSpace();
  }

  getNextLaunches() {
    this.loading = true;
    this.httpClient.get<IResponse<ILaunch>>(this.bo.launches('upcoming'))
      .pipe(take(1))
      .subscribe((res: IResponse<ILaunch>) => {
        this.nextLaunches = res.results;
        console.log(this.nextLaunches);
        this.loading = false;
      });
  }

  async getNextLaunchesMock() {
    const loading = await this.loadingCtrl.create({ spinner: 'circles' });
    loading.present();
    this.httpClient.get<IResponse<ILaunch>>('assets/api-mock-data/next-launches-mock.json').subscribe((res) => {
      setTimeout(() => {
        this.nextLaunches = res.results;
        console.log(this.nextLaunches);
        loading.dismiss();
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
    this.httpClient.get<IResponsePeopleInSpace>(this.bo.peopleInSpace())
      .pipe(take(1))
      .subscribe((response: IResponsePeopleInSpace) => {
        this.peopleInSpaceRaw = response.people;
        response.people.map((p: { name: string, craft: string }) => {
          this.httpClient.get(this.bo.astronauts(p.name.split(' ')[1]))
            .pipe(take(1))
            .subscribe(astronaut => console.log(astronaut))
        })
        console.log(this.peopleInSpaceRaw);
      })
  }

  getAliensInSpace() {
    this.aliensInSpace = Math.floor(Math.random() * 10) + 1;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PeopleInSpaceListComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    })
    modal.present()
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
