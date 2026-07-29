import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { DestaqueValorNumericoDirective } from '../../shared/destaque-valor-numerico.directive';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-saldo',
  imports: [CurrencyPipe, DestaqueValorNumericoDirective, CardComponent],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent {
  saldo = input.required<number>();
}
