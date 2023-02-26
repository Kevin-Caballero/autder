import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  theme: 'dark' | 'light' | undefined;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.prefersDark ? this.theme = 'dark' : this.theme = 'light';
    this.theme = this.themeService.currentTheme;
  }

  toggleTheme() {
    this.theme === 'dark' ? this.themeService.setTheme('light') : this.themeService.setTheme('dark');
    this.theme = this.themeService.currentTheme;
  }
}
