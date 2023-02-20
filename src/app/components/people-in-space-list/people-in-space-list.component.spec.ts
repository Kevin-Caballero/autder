import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeopleInSpaceListComponent } from './people-in-space-list.component';

describe('PeopleInSpaceListComponent', () => {
  let component: PeopleInSpaceListComponent;
  let fixture: ComponentFixture<PeopleInSpaceListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleInSpaceListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleInSpaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
