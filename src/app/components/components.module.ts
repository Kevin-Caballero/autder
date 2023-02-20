import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleInSpaceListComponent } from './people-in-space-list/people-in-space-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PeopleInSpaceListComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  providers: [
    PeopleInSpaceListComponent
  ]
})
export class ComponentsModule { }
