import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopularesPage } from './populares.page';

describe('PopularesPage', () => {
  let component: PopularesPage;
  let fixture: ComponentFixture<PopularesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
