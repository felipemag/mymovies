import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmBrevePage } from './em-breve.page';

describe('EmBrevePage', () => {
  let component: EmBrevePage;
  let fixture: ComponentFixture<EmBrevePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmBrevePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmBrevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
