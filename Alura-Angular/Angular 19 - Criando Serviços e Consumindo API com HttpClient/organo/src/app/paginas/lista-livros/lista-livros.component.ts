import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';

import { BotaoComponent } from '../../componentes/botao/botao.component';
import { DivisorComponent } from '../../componentes/divisor/divisor.component';
import { EstadoVazioComponent } from '../../componentes/estado-vazio/estado-vazio.component';
import { GeneroLiterario, Livro } from '../../componentes/livro/livro';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { SubtituloComponent } from '../../componentes/subtitulo/subtitulo.component';
import { TituloComponent } from '../../componentes/titulo/titulo.component';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-lista-livros',
  imports: [
    CommonModule,
    LivroComponent,
    TituloComponent,
    DivisorComponent,
    BotaoComponent,
    SubtituloComponent,
    EstadoVazioComponent
  ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  private livroService = inject(LivroService);

  generosComLivros = computed(() => {
    const livrosPorGenero = new Map<string, typeof livros>();
    const livros = this.livroService.livros();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!livrosPorGenero.has(generoId)) {
        livrosPorGenero.set(generoId, []);
      }
      livrosPorGenero.get(generoId)?.push(livro);
    });

    return this.livroService.generos.map((genero) => ({
      genero,
      livros: livrosPorGenero.get(genero.id) ?? []
    }));
  });


  ngOnInit() {
    this.livroService.loadLivros();
  }
  
  excluirLivro(livroId: string) {
    this.livroService.excluirLivro(livroId).subscribe();
  }
}
