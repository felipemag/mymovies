import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinhaListaPage } from './minha-lista.page';

describe('AssistidosPage', () => {
  let component: MinhaListaPage;
  let fixture: ComponentFixture<MinhaListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinhaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
