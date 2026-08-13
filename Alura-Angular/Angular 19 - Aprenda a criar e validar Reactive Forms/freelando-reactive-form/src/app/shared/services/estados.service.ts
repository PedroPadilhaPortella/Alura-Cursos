import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

export interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

export interface Cidade {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  private readonly API_URL =
    'https://servicodados.ibge.gov.br/api/v1/localidades';

  httpClient = inject(HttpClient);

  getEstados(): Observable<Estado[]> {
    return this.httpClient
      .get<Estado[]>(`${this.API_URL}/estados?orderBy=nome`)
      .pipe(retry(2));
  }

  getCidadesPorEstado(uf: string): Observable<Cidade[]> {
    return this.httpClient
      .get<Cidade[]>(`${this.API_URL}/estados/${uf}/municipios?orderBy=nome`)
      .pipe(retry(2));
  }
}
