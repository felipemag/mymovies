import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentosPageRoutingModule } from './lancamentos-routing.module';

import { LancamentosPage } from './lancamentos.page';

import { MovieListComponentModule } from '../../components/movie-list/movie-list.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancamentosPageRoutingModule,
    MovieListComponentModule
  ],
  declarations: [LancamentosPage]
})
export class LancamentosPageModule {}
