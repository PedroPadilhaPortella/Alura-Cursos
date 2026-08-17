import { Routes } from '@angular/router';

import { ListaPostagemComponent } from './paginas/lista-postagem/lista-postagem.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './componentes/layout/layout.component';
import { DetalhesPostagemComponent } from './paginas/detalhes-postagem/detalhes-postagem.component';

export const routes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./paginas/lista-postagem/lista-postagem.module').then(m => m.ListaPostagemModule),
      },
    ],
  },
];
