import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericListPageRoutingModule } from './generic-list-routing.module';

import { GenericListPage } from './generic-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericListPageRoutingModule
  ],
  declarations: [GenericListPage]
})
export class GenericListPageModule {}
