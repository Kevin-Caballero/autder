import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { IEvent, ILaunch } from 'src/app/models/the-space-devs';
import { BusinessOperationsService } from 'src/app/services/business-operations/business-operations.service';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.page.html',
  styleUrls: ['./generic-list.page.scss'],
})
export class GenericListPage implements OnInit {

  title: string;
  previousData: ILaunch[] | IEvent[] = [];

  constructor(
    private router: Router,
    private bo: BusinessOperationsService,
    private httpClient: HttpClient,
  ) {
    this.title = this.router.url.replace('/', '');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    switch (this.title) {
      case 'launches':
        this.httpClient.get(this.bo.launches('upcoming'))
          .pipe(take(1))
          .subscribe();

        this.httpClient.get(this.bo.launches('previous'))
          .pipe(take(1))
          .subscribe()
        break;
      case 'events':
        this.httpClient.get(this.bo.events('upcoming'))
          .pipe(take(1))
          .subscribe()

        this.httpClient.get(this.bo.events('previous'))
          .pipe(take(1))
          .subscribe()
        break;
      case 'news':
        this.httpClient.get(this.bo.news())
          .pipe(take(1))
          .subscribe()
        break;
      default:
        break;
    }
  }

}
