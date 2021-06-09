import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children :[
      { path: 'lancamentos', loadChildren: () => import('../lancamentos/lancamentos.module').then(m => m.LancamentosPageModule ) },
      { path: 'populares', loadChildren: () => import('../populares/populares.module').then(m => m.PopularesPageModule) },
      { path: 'em-breve', loadChildren: () => import('../em-breve/em-breve.module').then(m => m.EmBrevePageModule) },
    ],
  },
  {
    path: '',
    redirectTo: 'app/populares',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
