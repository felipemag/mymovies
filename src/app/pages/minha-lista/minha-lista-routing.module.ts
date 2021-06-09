import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhaListaPage } from './minha-lista.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaListaPageRoutingModule {}
