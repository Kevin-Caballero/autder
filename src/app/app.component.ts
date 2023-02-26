import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { Router } from '@angular/router';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Launches', url: '/launches', icon: 'rocket' },
    { title: 'Events', url: '/events', icon: 'planet' },
    { title: 'News', url: '/news', icon: 'newspaper' },
    { title: 'Config', url: '/config', icon: 'cog' },
  ];
  currentTheme: string | undefined;

  constructor(private themeService: ThemeService, private router: Router, private storage: StorageService) {
    this.themeService.prefersDark ? this.themeService.setTheme('dark') : this.themeService.setTheme('light');
    this.router.navigateByUrl('splash');
  }

  async ngOnInit() {
    this.themeService._theme.subscribe(theme => { this.currentTheme = theme });
  }


}
