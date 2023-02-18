import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILaunch } from 'src/app/models/the-space-devs';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.page.html',
  styleUrls: ['./launch-detail.page.scss'],
})
export class LaunchDetailPage implements OnInit {

  launch: ILaunch;

  constructor(private router: Router) {
    this.launch = this.router.getCurrentNavigation()?.extras?.state?.['launch'];
  }

  ngOnInit() {
  }

}
