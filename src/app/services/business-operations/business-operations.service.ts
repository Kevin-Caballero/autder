import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessOperationsService {

  private _theSpaceDevsDomain = 'https://ll.thespacedevs.com';
  private _theSpaceDevsVersion = '2.2.0';
  private _theSpaceDevsBaseUrl = `${this._theSpaceDevsDomain}/${this._theSpaceDevsVersion}`;

  private _openApiNotifyBaseUrl = 'http://api.open-notify.org';

  private _spaceFlightNewsDomain = 'https://api.spaceflightnewsapi.net';
  private _spaceFlightNewsVersion = 'v3';
  private _spaceFlightNewsBaseUrl = `${this._spaceFlightNewsDomain}/${this._spaceFlightNewsVersion}`;

  constructor() { }

  public peopleInSpace() {
    return `${this._openApiNotifyBaseUrl}/astros.json`;
  }

  public launches(when?: 'previous' | 'upcoming') {
    return `${this._theSpaceDevsBaseUrl}/launch/${when || ''}`;
  }

  public events(when?: 'previous' | 'upcoming') {
    return `${this._theSpaceDevsBaseUrl}/event/${when || ''}`;
  }

  public news() {
    return `${this._spaceFlightNewsBaseUrl}/articles`;
  }

}
