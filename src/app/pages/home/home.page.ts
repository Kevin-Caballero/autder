import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ILaunch } from 'src/app/models/launch.interface';
import { IResponse } from 'src/app/models/response.interface';

@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nextLaunches: ILaunch[] = [];
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getNextLaunches();
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

  getLaunchName(name: string) {
    return name?.split('|')[0]
  }

  selectLaunch(launch: ILaunch) {
    console.log(launch);
  }
}
