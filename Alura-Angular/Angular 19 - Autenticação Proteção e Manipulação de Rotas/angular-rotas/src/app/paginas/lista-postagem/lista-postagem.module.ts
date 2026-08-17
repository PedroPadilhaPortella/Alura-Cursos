import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesPostagemComponent } from '../detalhes-postagem/detalhes-postagem.component';
import { ListaPostagemComponent } from './lista-postagem.component';
import { postsResolver } from '../../resolvers/posts.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaPostagemComponent,
  },
  {
    path: ':id',
    component: DetalhesPostagemComponent,
    resolve: { post: postsResolver },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ListaPostagemModule {}
