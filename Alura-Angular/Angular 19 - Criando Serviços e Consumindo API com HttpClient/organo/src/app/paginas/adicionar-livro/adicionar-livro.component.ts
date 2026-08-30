import { Component, inject, Inject } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../componentes/livro/livro';
import { Router } from '@angular/router';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";

@Component({
  selector: 'app-adicionar-livro',
  imports: [FormularioComponent],
  templateUrl: './adicionar-livro.component.html',
  styleUrl: './adicionar-livro.component.css'
})
export class AdicionarLivroComponent {
  private livroService = inject(LivroService);
  private router = inject(Router);

  adicionarLivro(livro: Livro) {
    this.livroService.adicionarLivro(livro).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
