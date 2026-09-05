import { Injectable } from '@angular/core';
import { Cidade } from '../models/cidade';
import { CIDADES } from '../mocks/cidades.mock';
import { PASSAGENS } from '../mocks/passagens.mock';

@Injectable({
  providedIn: 'root',
})
export class PassagemService {
  readonly cidades: Cidade[] = CIDADES;

  buscarPassagens(origemId: string, destinoId: string) {
    return PASSAGENS.filter(
      (p) => p.origem.id === origemId && p.destino.id === destinoId
    );
  }
}
