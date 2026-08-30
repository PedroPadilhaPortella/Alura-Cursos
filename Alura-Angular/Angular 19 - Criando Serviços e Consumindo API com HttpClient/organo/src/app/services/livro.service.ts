import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { GeneroLiterario, Livro } from '../componentes/livro/livro';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private API_URL = 'http://localhost:3000';

  private readonly httpClient = inject(HttpClient);

  generos: GeneroLiterario[] = [
    { id: 'romance', value: 'Romance' },
    { id: 'misterio', value: 'Mistério' },
    { id: 'fantasia', value: 'Fantasia' },
    { id: 'ficcao-cientifica', value: 'Ficção Científica' },
    { id: 'tecnicos', value: 'Técnicos' },
  ];

  private livrosSignal = signal<Livro[]>([]);
  readonly livros = this.livrosSignal.asReadonly();

  public loadLivros(): void {
    this.httpClient
      .get<Livro[]>(`${this.API_URL}/livros`)
      .subscribe((response) => {
        this.livrosSignal.set(response);
      });
  }

  public getLivroById(id: string): Observable<Livro> {
    return this.httpClient.get<Livro>(`${this.API_URL}/livros/${id}`);
  }

  public adicionarLivro(livro: Livro): Observable<Livro> {
    return this.httpClient
      .post<Livro>(`${this.API_URL}/livros`, livro)
      .pipe(
        tap((novoLivro) =>
          this.livrosSignal.update((livros) => [...livros, novoLivro]),
        ),
      );
  }

  toggleFavorite(livro: Livro): Observable<Livro> {
    return this.httpClient
      .patch<Livro>(`${this.API_URL}/livros/${livro.id}`, {
        favorito: !livro.favorito,
      })
      .pipe(
        tap((livroAtualizado) => {
          this.livrosSignal.update((livros) =>
            livros.map((l) =>
              l.id === livroAtualizado.id ? livroAtualizado : l,
            ),
          );
        }),
      );
  }

  atualizarLivro(livro: Livro): Observable<Livro> {
    return this.httpClient
      .put<Livro>(`${this.API_URL}/livros/${livro.id}`, livro)
      .pipe(
        tap((livroAtualizado) => {
          this.livrosSignal.update((livros) =>
            livros.map((l) =>
              l.id === livroAtualizado.id ? livroAtualizado : l,
            ),
          );
        }),
      );
  }

  excluirLivro(livroId: string): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/livros/${livroId}`)
      .pipe(
        tap(() => {
          this.livrosSignal.update((livros) =>
            livros.filter((l) => l.id !== livroId),
          );
        }),
      );
  }
}
