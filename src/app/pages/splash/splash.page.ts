import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { forkJoin, take } from 'rxjs';
import { IAstronaut, ILaunch, IResponse } from 'src/app/models/the-space-devs';
import { BusinessOperationsService } from 'src/app/services/business-operations/business-operations.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public nav: NavController, private httpClient: HttpClient, private bo: BusinessOperationsService) { }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    const launches = this.httpClient.get<IResponse<ILaunch>>('assets/api-mock-data/next-launches-mock.json');
    const peopleInSpace = this.httpClient.get<IResponse<IAstronaut>>('assets/api-mock-data/people-in-space-mock.json');

    forkJoin([launches, peopleInSpace]).subscribe(data => {
      setTimeout(() => {
        this.nav.navigateForward('/home', { state: { nextLaunches: data[0].results, peopleInSpace: data[1].results } });
      }, 3000);
    })
  }
}

