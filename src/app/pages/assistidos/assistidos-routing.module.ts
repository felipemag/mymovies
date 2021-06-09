import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistidosPage } from './assistidos.page';

const routes: Routes = [
  {
    path: '',
    component: AssistidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistidosPageRoutingModule {}
