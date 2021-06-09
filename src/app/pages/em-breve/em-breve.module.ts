import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmBrevePageRoutingModule } from './em-breve-routing.module';

import { EmBrevePage } from './em-breve.page';

import { MovieListComponentModule } from '../../components/movie-list/movie-list.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmBrevePageRoutingModule,
    MovieListComponentModule
  ],
  declarations: [EmBrevePage]
})
export class EmBrevePageModule {}
