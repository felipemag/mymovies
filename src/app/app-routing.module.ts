import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/populares',
    pathMatch: 'full'
  },
  {
    path: 'minha-lista',
    loadChildren: () => import('./pages/minha-lista/minha-lista.module').then( m => m.MinhaListaPageModule)
  },
  {
    path: 'assistidos',
    loadChildren: () => import('./pages/assistidos/assistidos.module').then( m => m.AssistidosPageModule)
  },
  {
    path: 'filme/:id',
    loadChildren: () => import('./pages/filme/filme.module').then( m => m.FilmePageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
