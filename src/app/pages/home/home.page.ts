import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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
  peopleInSpace: any[] = [];
  aliensInSpace: number | undefined;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const data = this.router.getCurrentNavigation()?.extras.state;
      this.nextLaunches = data?.['nextLaunches']; //TODO: save this in cache
      this.peopleInSpace = data?.['peopleInSpace']; //TODO: save this in cache
    }
    this.getAliensInSpace();
  }

  getLaunchName(name: string) {
    return name?.split('|')[0]
  }

  selectLaunch(launch: ILaunch) {
    console.log(launch);
    this.router.navigate(['/launch-detail'], { state: { launch } })
  }

  getAliensInSpace() {
    this.aliensInSpace = Math.floor(Math.random() * 10) + 1;
  }

  async openModal() {

    const modal = await this.modalCtrl.create({
      component: PeopleInSpaceListComponent,
      backdropDismiss: true,
      componentProps: { peopleInSpace: this.peopleInSpace },
      breakpoints: [0, 0.3, 0.5, 0.9, 1],
      initialBreakpoint: 0.88
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
