import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Config', url: '/config', icon: 'cog' },
  ];
  constructor(private themeService: ThemeService, private router: Router) {
    this.themeService.prefersDark ? this.themeService.setTheme('dark') : this.themeService.setTheme('light');
    this.router.navigateByUrl('splash')
  }
}
