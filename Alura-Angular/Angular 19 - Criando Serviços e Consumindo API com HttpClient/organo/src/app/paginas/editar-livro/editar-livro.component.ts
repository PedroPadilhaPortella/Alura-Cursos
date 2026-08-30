import { Component, inject, OnInit } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { LivroService } from '../../services/livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../componentes/livro/livro';
import { EMPTY, switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-livro',
  imports: [FormularioComponent],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css',
})
export class EditarLivroComponent implements OnInit {
  private livroService = inject(LivroService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  livro: Livro | null = null;

  ngOnInit() {
    this.getLivroById();
  }

  getLivroById() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');

          if (id == null) {
            this.router.navigate(['/']);
            return EMPTY;
          }

          return this.livroService.getLivroById(id);
        }),
      )
      .subscribe((livro) => {
        this.livro = livro;
      });
  }

  atualizarLivro(livro: Livro) {
    this.livroService.atualizarLivro(livro).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
