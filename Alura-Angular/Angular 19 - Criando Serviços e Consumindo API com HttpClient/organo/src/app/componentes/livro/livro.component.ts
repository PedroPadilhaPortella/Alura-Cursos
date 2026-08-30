import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';

import { Livro } from './livro';
import { BotaoComponent } from '../botao/botao.component';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro',
  imports: [
    CommonModule,
    BotaoComponent
  ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  private livroService = inject(LivroService);

  livro = input.required<Livro>();
  excluirLivro = output<string>();

  alternarFavorito() {
    this.livroService.toggleFavorite(this.livro()).subscribe((response) => {
      this.livro().favorito = response.favorito;
    });
  }

  removerLivro() {
    this.excluirLivro.emit(this.livro().id);
  }
}
