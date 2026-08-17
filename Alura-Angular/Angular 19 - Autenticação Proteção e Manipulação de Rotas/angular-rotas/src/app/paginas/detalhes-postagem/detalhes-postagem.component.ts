import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioPostagemComponent } from '../../componentes/usuario-postagem/usuario-postagem.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../../models/post.model';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent],
})
export class DetalhesPostagemComponent {
  postId: string | null = null;
  post: Postagem | null = null;

  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.post = this.route.snapshot.data['post'];

    if (!this.post) {
      this.router.navigate(['/posts']);
    }
  }
}
