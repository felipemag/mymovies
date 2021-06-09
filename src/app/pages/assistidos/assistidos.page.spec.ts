import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssistidosPage } from './assistidos.page';

describe('AssistidosPage', () => {
  let component: AssistidosPage;
  let fixture: ComponentFixture<AssistidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
