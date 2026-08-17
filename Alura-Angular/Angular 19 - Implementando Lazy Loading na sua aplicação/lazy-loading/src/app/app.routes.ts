
import { Routes } from '@angular/router';

import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';

export const routes: Routes = [
  {
    path: 'lista-livros',
    component: ListaLivrosComponent
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent),
    // component: SobreComponent
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent),
    // component: ContatoComponent
  },
  {
    path: '',
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }
];
