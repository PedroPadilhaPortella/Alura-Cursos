import { Routes } from '@angular/router';

import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { AdicionarLivroComponent } from './paginas/adicionar-livro/adicionar-livro.component';
import { EditarLivroComponent } from './paginas/editar-livro/editar-livro.component';

export const routes: Routes = [
  {
    path: 'lista-livros',
    component: ListaLivrosComponent
  },
  {
    path: 'adicionar-livro',
    component: AdicionarLivroComponent
  },
  {
    path: 'editar-livro/:id',
    component: EditarLivroComponent
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }
];
