import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaListaPageRoutingModule } from './minha-lista-routing.module';

import { MinhaListaPage } from './minha-lista.page';

import { MovieListComponentModule } from '../../components/movie-list/movie-list.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaListaPageRoutingModule,
    MovieListComponentModule
  ],
  declarations: [MinhaListaPage]
})
export class MinhaListaPageModule {}
