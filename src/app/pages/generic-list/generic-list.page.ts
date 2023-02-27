import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { take } from 'rxjs';
import { IEvent, ILaunch, IResponse } from 'src/app/models/the-space-devs';
import { BusinessOperationsService } from 'src/app/services/business-operations/business-operations.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.page.html',
  styleUrls: ['./generic-list.page.scss'],
})
export class GenericListPage implements OnInit {

  title: string;
  previousData: ILaunch[] = [];
  upcomingData: ILaunch[] = [];
  loading: HTMLIonLoadingElement | undefined;

  constructor(
    private router: Router,
    private bo: BusinessOperationsService,
    private httpClient: HttpClient,
    private loadingCtrl: LoadingController
  ) {
    this.title = this.router.url.replace('/', '');
  }

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'circles',
    });
    this.getData();
    this.addMoreItems();
  }

  async getData() {

    switch (this.title) {
      case 'launches':
        this.loading?.present()
        // this.httpClient.get(this.bo.launches('upcoming'))
        //   .pipe(take(1))
        //   .subscribe();

        // this.httpClient.get(this.bo.launches('previous'))
        //   .pipe(take(1))
        //   .subscribe()
        this.httpClient.get<IResponse<ILaunch>>('assets/api-mock-data/previous-launches-mock.json')
          .pipe(take(1))
          .subscribe(data => {
            setTimeout(() => {
              this.previousData = data.results;
              this.loading?.dismiss()
            }, 2000);
          })
        break;
      case 'events':
      // this.httpClient.get(this.bo.events('upcoming'))
      //   .pipe(take(1))
      //   .subscribe()

      // this.httpClient.get(this.bo.events('previous'))
      //   .pipe(take(1))
      //   .subscribe()
      // break;
      case 'news':
        // this.httpClient.get(this.bo.news())
        //   .pipe(take(1))
        //   .subscribe()
        break;
      default:
        break;
    }
  }


  // loadData(ev: any) {
  //   console.log('HERE!!');

  //   this.getNextItemsMock();
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   }, 500);
  // }

  getNextItemsMock() {
    this.httpClient.get<IResponse<ILaunch>>('assets/api-mock-data/previous-launches-mock.json')
      .pipe(take(1))
      .subscribe(data => {
        setTimeout(() => {
          return (this.previousData as ILaunch[]).push(...data.results);
        }, 2000);
      })
  }



  items: any[] = [];
  numTimesLeft = 5;

  loadData(event: any) {
    this.httpClient.get<IResponse<ILaunch>>('assets/api-mock-data/previous-launches-mock.json')
      .pipe(take(1))
      .subscribe(data => {
        setTimeout(() => {
          (this.previousData as ILaunch[]).push(...data.results);
          event.target.complete();
        }, 2000);
      })
  }

  addMoreItems() {
    for (let i = 0; i < 10; i++) {
      this.items.push(i);
    }
  }

  getImgUrl(code: string) {
    return `https://countryflagsapi.com/png/${code}`
  }

  getName(name: string) {
    return name.split('|')[0];
  }

}
