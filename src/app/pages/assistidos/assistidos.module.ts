import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistidosPageRoutingModule } from './assistidos-routing.module';

import { AssistidosPage } from './assistidos.page';

import { MovieListComponentModule } from '../../components/movie-list/movie-list.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistidosPageRoutingModule,
    MovieListComponentModule
  ],
  declarations: [AssistidosPage]
})
export class AssistidosPageModule {}
