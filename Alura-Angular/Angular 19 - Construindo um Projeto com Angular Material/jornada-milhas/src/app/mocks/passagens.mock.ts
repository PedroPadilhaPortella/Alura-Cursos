import { Passagem } from '../models/passagem';
import { CIDADES } from './cidades.mock';

const HORARIOS = ['06:15', '08:30', '11:00', '14:20', '17:45', '19:10', '22:10', '23:40'];
const VOOS_POR_ROTA = 4;

function gerarPassagens(): Passagem[] {
  const passagens: Passagem[] = [];
  let contador = 1;

  for (const origem of CIDADES) {
    for (const destino of CIDADES) {
      if (origem.id === destino.id) continue;

      for (let i = 0; i < VOOS_POR_ROTA; i++) {
        const dia = 10 + (contador % 18);
        const mes = 3 + (contador % 3);
        const data = `2026-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        const horario = HORARIOS[contador % HORARIOS.length];

        const valorDolares = 400 + ((contador * 37) % 900);
        const valorMilhas = valorDolares * 45 + ((contador * 13) % 500);

        passagens.push({
          id: String(contador),
          origem,
          destino,
          data,
          horario,
          valorMilhas,
          valorDolares,
        });

        contador++;
      }
    }
  }

  return passagens;
}

export const PASSAGENS: Passagem[] = gerarPassagens();