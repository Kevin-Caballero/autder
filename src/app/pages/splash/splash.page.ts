import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs';
import { ILaunch, IResponse } from 'src/app/models/the-space-devs';
import { BusinessOperationsService } from 'src/app/services/business-operations/business-operations.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public nav: NavController, private httpClient: HttpClient, private bo: BusinessOperationsService) { }

  ngOnInit() {
    // this.httpClient.get<IResponse<ILaunch>>(this.bo.launches('upcoming'))
    //   .pipe(take(1))
    //   .subscribe((res: IResponse<ILaunch>) => {
    //     this.nav.navigateForward('/home', { state: { nextLaunches: res.results } })
    //   })


    this.httpClient.get<IResponse<ILaunch>>('assets/api-mock-data/next-launches-mock.json').subscribe((res) => {
      setTimeout(() => {
        this.nav.navigateForward('/home', { state: { nextLaunches: res.results } })
      }, 2000);
    });
  }

}
