import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  public currentTheme: 'dark' | 'light' = this.prefersDark ? 'dark' : 'light';

  constructor() { }

  public setTheme(value: 'dark' | 'light') {
    if (value === 'dark') {
      document.body.setAttribute('color-theme', 'dark')
    }
    else {
      document.body.setAttribute('color-theme', 'light');
    }
    this.currentTheme = value;
  }
}
