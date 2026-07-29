import { Component, input, output, signal } from '@angular/core';

import { DestaqueValorNumericoDirective } from '../../shared/destaque-valor-numerico.directive';
import { BotaoComponent } from '../../shared/botao/botao.component';
import { CardComponent } from '../../shared/card/card.component';
import { Conta } from '../compartilhados/conta.model';

import { ModalNovaContaComponent } from './modal-nova-conta/modal-nova-conta.component';
import { ContaComponent } from './conta/conta.component';

@Component({
  selector: 'app-contas',
  imports: [
    BotaoComponent,
    ContaComponent,
    CardComponent,
    ModalNovaContaComponent,
    DestaqueValorNumericoDirective,
  ],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css',
})
export class ContasComponent {
  isModalOpen = signal(false);

  contas = input.required<Conta[]>();

  addConta = output<Conta>();

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onAddConta(conta: Conta) {
    this.addConta.emit(conta);
  }
}
