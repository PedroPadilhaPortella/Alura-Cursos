import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Passagem } from '../../models/passagem';

@Component({
  selector: 'app-passagem-card',
  imports: [DecimalPipe],
  templateUrl: './passagem-card.html',
  styleUrl: './passagem-card.scss',
})
export class PassagemCard {
  passagem = input.required<Passagem>();
}
