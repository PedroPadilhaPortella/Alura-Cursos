import { Component, input } from '@angular/core';

import { Estatisticas } from '../../models/post.model';

@Component({
  selector: 'app-acoes-postagem',
  imports: [],
  templateUrl: './acoes-postagem.component.html',
  styleUrl: './acoes-postagem.component.css'
})
export class AcoesPostagemComponent {
  estatisticas = input.required<Estatisticas>();  
}
