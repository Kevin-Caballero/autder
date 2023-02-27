import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: HTMLIonLoadingElement | undefined;

  constructor(private loadingCtrl: LoadingController) { }

  async init() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'circles',
    });
  }

  present() {
    this.loading?.present();
  }

  dismiss() {
    this.loading?.dismiss();
  }


}
