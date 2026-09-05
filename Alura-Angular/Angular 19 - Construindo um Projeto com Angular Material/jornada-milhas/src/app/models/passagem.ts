import { Cidade } from './cidade';

export interface Passagem {
  id: string;
  origem: Cidade;
  destino: Cidade;
  data: string; // ISO, ex: "2026-03-15"
  horario: string; // ex: "08:30"
  valorMilhas: number;
  valorDolares: number;
}