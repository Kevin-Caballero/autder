import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  public currentTheme: 'dark' | 'light' = this.prefersDark ? 'dark' : 'light';
  public _theme = new Subject<'dark' | 'light'>();

  constructor() {
    this._theme.next(this.currentTheme)
  }

  public setTheme(value: 'dark' | 'light') {
    if (value === 'dark') {
      document.body.setAttribute('color-theme', 'dark')
    }
    else {
      document.body.setAttribute('color-theme', 'light');
    }
    this.currentTheme = value;
    this._theme.next(this.currentTheme);
  }

  public getTheme() {
    return this._theme.asObservable();
  }
}
